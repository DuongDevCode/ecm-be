const crypto = require('crypto')
const {Cipher} = require('crypto')

const algorithm = 'aes-256-cbc'
const charset = 'utf8'
const cipherEncoding = 'base64'

const KEY_PUBLIC = process.env.NEXT_PUBLIC_KEY_PUBLIC ?? 'a03be5cd7faaeaf54a0b364878e9491427a2741c7158dab360b637e8f28071e3'
const IV_PUBLIC = process.env.NEXT_PUBLIC_IV_PUBLIC ?? '0dbc2be6ef0e8ad0f0cf02c49e51360e'

function encrypt(plaintext) {
  const key = Buffer.from(KEY_PUBLIC, 'hex'); // Chuyển key từ hex sang Buffer
  const iv = Buffer.from(IV_PUBLIC, 'hex');  // Chuyển iv từ hex sang Buffer
  const cipher = crypto.createCipheriv(algorithm, key, iv) 
  const cipherChunks = []
  cipherChunks.push(cipher.update(plaintext, charset, cipherEncoding))
  cipherChunks.push(cipher.final(cipherEncoding))
  let encrypt = cipherChunks.join('')
  encrypt = encrypt.replace(/\+/g, '%2b')
  return encrypt
}


function decrypt(plaintext) {
  const key = Buffer.from(KEY_PUBLIC, 'hex'); // Chuyển key từ hex sang Buffer
  const iv = Buffer.from(IV_PUBLIC, 'hex');  // Chuyển iv từ hex sang Buffer
  // eslint-disable-next-line no-param-reassign
  plaintext = plaintext.replace(/(%2b)/g, '+')
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  const plainChunks = []
  plainChunks.push(decipher.update(plaintext, cipherEncoding, charset))
  plainChunks.push(decipher.final(charset))
  return plainChunks.join('')
}

module.exports = {
  encrypt,
  decrypt
}
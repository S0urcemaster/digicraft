
import crypto from 'crypto'

export function generateToken() {
	const token = crypto.randomBytes(32).toString('hex')
	return token
}

function hashPassword(password: string) {
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return { salt, hash };
}

function verifyPassword(password: string, salt: string, hash: string) {
	const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return hashedPassword === hash;
}
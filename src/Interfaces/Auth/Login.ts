export interface LoginSubmit {
	(email: string, passowrd: string, setSubmitting: any): void;
}

export interface LoginResponse {
	data: ServerData;
}

interface ServerData {
	token: string;
	expirationTime: number;
	userId: number;
	type: string;
}

export interface fieldNameProps{
	[campo: string]: boolean
}

export interface ApiError{
	name: string
	response: {
		data: {
			message: string
		}
		status: number
	}
}

export interface ApiSucces{
	data: string
	status: number
	statusText: string
}
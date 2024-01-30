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
	status: number
	statusText: string
	data: {
		authToken: string
		message: string
		username: string
		id: string
	}
}

export interface Question {
	id: string;
	title: string
	description: string;
	tags: string
	registration_date: string;
	id_user: string;
}

export interface ApiSuccessQuestion {
  data: Question[];
}


export interface Tag {
  tag: string;
}

export interface ParsedQuestion {
  description: string;
  title: string
  id: string;
  id_user: string;
  registration_date: string;
  tags: Tag[]; // 'tags' es ahora un array de objetos 'Tag'
}

export interface detailsInput {
    title: string;
    description: string;
    tags: string;
	id_user: string
}
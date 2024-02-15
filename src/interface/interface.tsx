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

export interface ApiLogin{
	status: number
	statusText: string
	data: {
		id: string
		message: string
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

export interface ProfileApi{
    data: string
}

export interface Tag {
  tag: string;
}

export interface detailsInput {
    title: string;
    description: string;
    tags: string;
}



// Estas intreface son de la vista SeeQuestion
export interface Answer {
	id_response: string;
	registration_date_answer: string;
	response: string
  }
  
export interface Question {
	description: string;
	id_question: string
	registration_date: string
	tags: string
	title: string
}

export interface UpQuestions {
    tags: {
        tag: string;
    }[] | undefined;
    description?: string | undefined;
    id_question?: string | undefined;
    registration_date?: string | undefined;
    title?: string | undefined;
}[]

  
export interface QAItem {
	answers?: Answer[];
	question?: Question;
}
  
export interface Props {
	data: QAItem[];
}
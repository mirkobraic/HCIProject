import { useState } from 'react'

export const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues)

	return [
		values,
		(e) => {
			const value =
				e.target.type === 'checkbox'
					? e.target.checked
					: e.target.value
			if(e.target.name === 'category' && value === '') {
				setValues({
					...values,
					[e.target.name]: value,
					product_type: '',
    				brand: '',
				})
				console.log(values);
			} else {
				setValues({
					...values,
					[e.target.name]: value,
				})
			}
		},
	]
}

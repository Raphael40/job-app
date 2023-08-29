import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';

const rapid_api_key = RAPID_API_KEY

const useFetch = (endPoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endPoint}`,
		headers: {
				'X-RapidAPI-Key': rapid_api_key,
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
		},
		params: {
				...query
		}
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			console.log(response.data.data);
			setData(response.data.data);
			setIsLoading(false)
		} catch (error) {
			setError(error)
			console.error(error);
			alert('There is an error')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true)
		fetchData();
	}

	return { data, isLoading, error, refetch }
}

export default useFetch;
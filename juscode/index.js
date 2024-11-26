import axios from 'axios'

const options = {
  method: 'POST',
  url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/3D',
  headers: {
    'x-rapidapi-key': 'd1d3c58389msh2b6c3c910d955d8p187f80jsnf9ad0abcde30',
    'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    inputs: 'An enchanted castle atop a mountain, surrounded by swirling clouds and cascading waterfalls.'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


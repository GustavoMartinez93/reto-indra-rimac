export const getPlansData = async () => {
    const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
    if (!response.ok) {
      throw new Error('Error fetching plans data');
    }
    return response.json();
  };
  
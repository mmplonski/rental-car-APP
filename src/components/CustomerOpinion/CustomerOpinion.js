import { useEffect, useLayoutEffect, useState } from 'react';

const opinions = [
	'"Szybko sprawnie i bezproblemowo. Po przyjechaniu na miejsce musiałem poczekać kilkanaście minut na samochód."',
	'"Kolejny raz wypożyczyłam samochód i jestem mega zadowolona ! Wszystko poszło sprawnie i szybko. Profesjonalne podejście i super kontakt. Gorąco polecam."',
	'"Skorzystałem z usług tej wypożyczalni drugi raz i znowu mile doświadczenie.  Obsługa jak zwykle miła i profesjonalna a formalności ograniczone do minimum."',
];

const styles = {
	position: 'absolute',
	padding: '10px',
	top: '10px',
	left: 0,
	right: 0,
	textAlign: 'center',
	color: '#fff',
	fontStyle: 'italic',
};

function CustomerOpinion(props) {
	const [opinion, setOpinion] = useState('Wczytywanie opinii');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// .... pobieranie danych z backendu
		setLoading(false);
	}, []);

	useEffect(() => {
		setOpinion(opinions[Math.floor(Math.random() * opinions.length)]);
	}, [loading]);

	return <p style={styles}>{opinion}</p>;
}
export default CustomerOpinion;

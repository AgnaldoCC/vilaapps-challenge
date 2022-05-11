import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header/Header';
import { getLocalStorage, useCountdown } from '../hooks/useCountdownList';

const Home = () => {
  const setCountdownList = useCountdown((state) => state.setCountdownList);
  const setIndex = useCountdown((state) => state.setIndex);
  useEffect(() => {
    const persistedList = getLocalStorage('countdownList', '[]');
    const persistedIndex = getLocalStorage('countdownIndex', '0');
    setCountdownList(persistedList);
    setIndex(persistedIndex === [] ? 0 : persistedIndex);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <CardList setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default Home

import { useEffect, useState } from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useFetchMasonryAPR = () => {
  const [apr, setApr] = useState<number>(0);
  const bombFinance = useBombFinance();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    async function fetchMasonryAPR() {
      try {
        setApr(await bombFinance.getMasonryAPR());
      } catch (err) {
        console.error(err);
      }
    }
    fetchMasonryAPR();
  }, [setApr, bombFinance, slowRefresh]);

  return apr;
};

export default useFetchMasonryAPR;

 import { StyleSheet, Text, View } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

const MainCard = ({ loading }: MainCardProps) => {
  return (
    <>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <Text>Contenido Listo!</Text>
      )}
    </>
  );
};

export default MainCard;
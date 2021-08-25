import React, {useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  margin-top: 30px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 10px;
  padding: 12px;
  background-color: #EEE;
`;

export default () => {

  const [bill, setBill] = useState('');
  return (
    <Page>
      <HeaderText>Tip Calculator</HeaderText>
      <Input
        placeholder="Total Amount of Bill"
        placeholderTextColor="#9fa1a5"
        keyboardType= "numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
    </Page>
  );
}
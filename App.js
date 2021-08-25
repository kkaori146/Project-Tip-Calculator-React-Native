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
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 10px;
  padding: 12px;
  background-color: #EEE;
`;

const CalcButton = styled.Button``;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button``;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill) {
        setTip (nBill * (pct/100));
    } else {
      alert("Inform the Bill");
    }
    
  }
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
      <PctArea>
        <PctItem title = "5%" onPress= {() => setPct(5)} />
        <PctItem title = "10%" onPress= {() => setPct(10)} />
        <PctItem title = "15%" onPress= {() => setPct(15)} />
        <PctItem title = "20%" onPress= {() => setPct(20)} />
      </PctArea>


      <CalcButton title = {`Calculate ${pct}%`} onPress={calc}/>
      {tip > 0 &&
        <ResultArea>
            <ResultItemTitle>Bill without Tip</ResultItemTitle>
            <ResultItem>$ {parseFloat(bill).toFixed(2)}</ResultItem>

            <ResultItemTitle>Tip</ResultItemTitle>
            <ResultItem>$ {tip.toFixed(2)} ({pct}%)</ResultItem>
            <ResultItemTitle>Total</ResultItemTitle>
            <ResultItem>$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  );
}
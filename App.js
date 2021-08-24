import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');
  const[resultadoS,setresultadoS]=useState('');
  const[resultadoR,setresultadoR]=useState('');
  const[resultadoM,setresultadoM]=useState('');
  const[resultadoD,setresultadoD]=useState('');

  function Sumar(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a+b;
    var resul="resultado suma: "+a+"+"+b+"="+c;
    setresultadoS(resul);
  }

  function Restar(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a-b;
    var resul="resultado resta: "+a+"-"+b+"="+c;
    setresultadoR(resul);
  }

  function Multiplicacion(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a*b;
    var resul="resultado multiplicacaion: "+a+"*"+b+"="+c;
    setresultadoM(resul);
  }

  function Division(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a/b;
    var resul="resultado division: "+a+"/"+b+"="+c;
    setresultadoD(resul);
  }

  return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'orange',color:'white', textAlign:'center'}}>
        Operaciones basicas
      </Text>
      <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 1'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 2'
      keyboardType='numeric'
      onChangeText={(text2)=>settext2(text2)}
      />
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{
  if(text1 === '' || text2 === '')
  {
    <Text style={{fontSize:32}}>{setresultadoS("Por favor digite los 2 numeros")}</Text>,
    <Text style={{fontSize:32}}>{setresultadoR('')}</Text>,
    <Text style={{fontSize:32}}>{setresultadoM('')}</Text>,
    <Text style={{fontSize:32}}>{setresultadoD('')}</Text>
  }
  else
  {
  Sumar(text1,text2), Restar(text1,text2), 
              Multiplicacion(text1,text2), Division(text1,text2)}
  }
}// fin del onPress 
> 



<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  CALCULAR...
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultadoS}</Text>
<Text style={{fontSize:32}}>{resultadoR}</Text>
<Text style={{fontSize:32}}>{resultadoM}</Text>
<Text style={{fontSize:32}}>{resultadoD}</Text>
</View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

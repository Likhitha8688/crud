import "./calculator.css"
//import React, {component}from "react";
function Calci(){
    //render(){
        return(
            <div>
                <h2>Calculator</h2>
 
<form name="calcForm">
<table>
<tr>
  <td colSpan="4"><input type="text" name="display" style={{textAlign:"right"}} id="a"/></td>
</tr>
<tr>
  <td><input type="button" name="btn1" value="1"onClick="calcForm.display.value += '1'"id="hi"/></td>
  <td><input type="button" name="btn2" value="2" onClick="calcForm.display.value += '2'"id="hi"/></td>
  <td><input type="button" name="btn3" value="3"onClick="calcForm.display.value += '3'"id="hi"/></td>
  <td><input type="button" name="btnAdd" value="+" onClick="calcForm.display.value += ' + '"id="hi"/></td>
</tr>
<tr>
  <td><input type="button" name="btn4" value="4" onClick="calcForm.display.value += '4'"id="hi"/></td>
  <td><input type="button" name="btn5" value="5" onClick="calcForm.display.value += '5'"id="hi"/></td>
  <td><input type="button" name="btn6" value="6" onClick="calcForm.display.value += '6'"id="hi"/></td>
  <td><input type="button" name="btnSub" value="-" onClick="calcForm.display.value += ' - '"id="hi"/></td>
</tr>
<tr>
  <td><input type="button" name="btn7" value="7" onClick="calcForm.display.value += '7'"id="hi"/></td>
  <td><input type="button" name="btn8" value="8" onClick="calcForm.display.value += '8'"id="hi"/></td>
  <td><input type="button" name="btn9" value="9" onClick="calcForm.display.value += '9'"id="hi"/></td>
  <td><input type="button" name="btnMul" value="x" onClick="calcForm.display.value += ' * '"id="hi"/></td>
</tr>
<tr>
  <td><input type="button" name="btnClear" value="C" onClick="calcForm.display.value = ''"id="hi"/></td>
  <td><input type="button" name="btn0" value="0" onClick="calcForm.display.value += '0'"id="hi"/></td>
  <td><input type="button" name="btnEqual" value="=" onClick="calcForm.display.value = eval(calcForm.display.value)"id="hi"/></td>
  <td><input type="button" name="btnDiv" value="/" onClick="calcForm.display.value += ' / '"id="hi"/></td>
</tr>
</table>
</form>
            </div>
        )
   // }
} 
export default Calci;
import './App.css';

import $ from 'jquery';

function App() {

  let uniqueId = 1

  let element = '';

  let styleSheet = []

  // SHOW CODE
  const showCode = () => {
    let codeData;
    
    codeData = document.getElementById('Page').innerHTML;
    document.getElementById('displayCode').innerHTML = codeData;

    for (let i=1;i<=uniqueId-1;i++){
      codeData = codeData.replaceAll('id="'+i, 'id="d'+i);
    }

    document.getElementById('displayCode').innerHTML = codeData;

    for (let i=1;i<=uniqueId-1;i++){
      document.getElementById('d'+i).removeAttribute('style')
      document.getElementById('d'+i).removeAttribute('tabindex')

      document.getElementById('d'+i).removeAttribute('id')
    }

    codeData = document.getElementById('displayCode').innerHTML;

    // Replace gt lt symbols
    codeData = codeData.replaceAll("<", "&lt;");
    codeData = codeData.replaceAll(">", "&gt;");

    // Stylize HTML
    codeData = codeData.replaceAll("&lt;/div&gt;", "&lt;/div&gt;</br>");
    // codeData = codeData.replaceAll(";", ";<br><span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>");
    // codeData = codeData.replaceAll("<span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>}", "}<br><br>");

    // Remove tab index
    // codeData = codeData.replaceAll('tabindex="-1"', "");

    // style sheet    
    // codeData = codeData.replaceAll('style="', "style='");
    // codeData = codeData.replaceAll(';"', ";'");

    // Remove style attribute
    // let styleData = codeData.split('style="').pop().split('"')[0];
    // console.log(styleData)

    // Remove style attribute from single time
    // codeData = codeData.replace(/style=".*"/, '')

    document.getElementById('displayCode').innerHTML = codeData;
  }

  const showCss = () => {
    let css = "";
    for (var i=0;i<styleSheet.length;i++) {
        css += "#" + styleSheet[i].id + " {";
        for (var key in styleSheet[i]) {
            console.log("key " + key + " has value " + styleSheet[i][key]);
            if(key!="id"){
                css += key +": "+ styleSheet[i][key]+";"
            }
        }
        css += "}";
                
    }
    console.log(css)

    // Stylize Css
    css = css.replaceAll("{", "{&nbsp;");
    css = css.replaceAll(";", ";<br><span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>");
    css = css.replaceAll("<span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>}", "}<br><br>");

    // Display Css
    document.getElementById('displayCode').innerHTML = css;
  }

  const closeShowCode = () => {
    document.getElementById('displayCodeSection').style.display="none";
  }

  const grabCode = () => {

    // Display HTML
    let codeData;
    
    codeData = document.getElementById('Page').innerHTML;
    document.getElementById('showHtmlCode').innerHTML = codeData;

    for (let i=1;i<=uniqueId-1;i++){
      codeData = codeData.replaceAll('id="'+i, 'id="d'+i);
    }

    document.getElementById('showHtmlCode').innerHTML = codeData;

    for (let i=1;i<=uniqueId-1;i++){
      document.getElementById('d'+i).removeAttribute('style')
      document.getElementById('d'+i).removeAttribute('tabindex')

      document.getElementById('d'+i).removeAttribute('id')
    }

    codeData = document.getElementById('showHtmlCode').innerHTML;

    // Replace gt lt symbols
    codeData = codeData.replaceAll("<", "&lt;");
    codeData = codeData.replaceAll(">", "&gt;");

    // Stylize HTML
    codeData = codeData.replaceAll("&lt;/div&gt;", "&lt;/div&gt;</br>");

    // Display HTML
    document.getElementById('showHtmlCode').innerHTML = codeData;

    // Display Css

    let css = "";
    for (var i=0;i<styleSheet.length;i++) {
        css += "." + styleSheet[i].class + " {";
        for (var key in styleSheet[i]) {
            if(key!="id" && key!="class" && key!="text"){
                let keyName = key.split(/(?=[A-Z])/).join('-').toLowerCase();
                css += keyName +": "+ styleSheet[i][key]+";"
            }
        }
        css += "}";
                
    }
    console.log(css)

    // Stylize Css
    css = css.replaceAll("{", "{&nbsp;");
    css = css.replaceAll(";", ";<br><span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>");
    css = css.replaceAll("<span class='d-inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;</span>}", "}<br><br>");

    // Display Css
    document.getElementById('showCssCode').innerHTML = css;

    // Display Section
    document.getElementById('displayCodeSection').style.display="block";

  }

  // ELEMENTS

  // CONTAINER
  const addContainer = () => {

    if(element===''){
      //let pageData = document.getElementById('Page').innerHTML;
      document.getElementById('Page').innerHTML += `<div class="container p${uniqueId}" id=${uniqueId} tabIndex="-1"></div>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
    else{
      document.getElementById(element).innerHTML += `<div class="container p${uniqueId}" id=${uniqueId} tabIndex="-1"></div>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }

  }

  
  // CONTAINER
  const addDiv = () => {

    if(element===''){
      //let pageData = document.getElementById('Page').innerHTML;
      document.getElementById('Page').innerHTML += `<div id=${uniqueId} class=p${uniqueId} tabIndex="-1"></div>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
    else{
      document.getElementById(element).innerHTML += `<div id=${uniqueId} class=p${uniqueId} tabIndex="-1"></div>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }

  }

  // BUTTON
  const addButton = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<button id=${uniqueId} class=p${uniqueId} tabIndex="-1">Button</button>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<button id=${uniqueId} class=p${uniqueId} tabIndex="-1">Button</button>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Anchor
  const addAnchor = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<a href="#" id=${uniqueId} class=p${uniqueId} tabIndex="-1">link to</a>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<a href="#" id=${uniqueId} class=p${uniqueId} tabIndex="-1">link to</a>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Hyper Link | Anchor Tag | a
  const addAnchorTag = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<a href="#" id=${uniqueId} class=p${uniqueId} tabIndex="-1">link</a>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<a href="#" id=${uniqueId} class=p${uniqueId} tabIndex="-1">link</a>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Image
  const addImg = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<img id=${uniqueId} class=p${uniqueId} src="/" tabIndex="-1">`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<img id=${uniqueId} class=p${uniqueId} src="/" tabIndex="-1">`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Paragraph
  const addParagraph = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<p id=${uniqueId} class=p${uniqueId} tabIndex="-1">Paragraph</p>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<p id=${uniqueId} class=p${uniqueId} tabIndex="-1">Paragraph</p>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Span
  const addSpan = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<span id=${uniqueId} class=p${uniqueId} tabIndex="-1">Span</span>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<span id=${uniqueId} class=p${uniqueId} tabIndex="-1">Span</span>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H1
  const addHeading1 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h1 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h1</h1>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h1 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h1</h1>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H2
  const addHeading2 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h2 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h2</h2>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h2 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h2</h2>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H3
  const addHeading3 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h3 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h3</h3>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h3 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h3</h3>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H4
  const addHeading4 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h4 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h4</h4>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h4 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h4</h4>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H5
  const addHeading5 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h5 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h5</h5>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h5 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h5</h5>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // H6
  const addHeading6 = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<h6 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h6</h6>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<h6 id=${uniqueId} class=p${uniqueId} tabIndex="-1">h6</h6>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Input
  const addInput = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<input type="text" id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<input type="text" id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Label
  const addLabel = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<label type="text" id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>label</label>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<label type="text" id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>label</label>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // Un ordered List
  const addUl = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<ul id=${uniqueId} class=p${uniqueId} tabIndex="-1"/></ul>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<ul id=${uniqueId} class=p${uniqueId} tabIndex="-1"/></ul>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  // List Item
  const addLi = () => {
    if(element===''){
      document.getElementById('Page').innerHTML += `<li id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>List Item</li>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    } else {
      document.getElementById(element).innerHTML += `<li id=${uniqueId} class=p${uniqueId} tabIndex="-1"/>List Item</li>`
      let newStyleSheet = {'id': uniqueId.toString(), 'class': "p"+uniqueId.toString()}
      styleSheet.push(newStyleSheet)
      uniqueId += 1;
    }
  }

  //FUNCTIONALITIES

  // SET FOCUS
  const focusedElement = () => {
    try{
      $('#elementStyles').find('input:text, select')
        .each(function () {
            $(this).val('');
        });
      document.getElementById('elementOptions').style.display = "block";
      document.getElementById('elementStyles').style.display = "none";
    } catch{}
    try{
      document.getElementById(element).style.border = "none"
    } catch {}
    element = document.activeElement.id;
    console.log(element)
    document.getElementById(element).style.border = "1px solid";
    let tagName=document.getElementById(element).tagName;
    // console.log(tagName)
    // if(tagName==="DIV" || tagName==="INPUT" || tagName==="LABEL" || tagName==="UL" || tagName==="LI" || tagName==="A"|| tagName==="BUTTON"){
    //   divOptions();
    // }
    divOptions();
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
          try{

            if(styleSheet[i].classes !== undefined) {
              document.getElementById('elementClasses').value = styleSheet[i].class;
            } else {
              document.getElementById('elementClasses').value = ''
            }

            if(styleSheet[i].text !== undefined) {
              document.getElementById('elementText').value = styleSheet[i].text;
            } else{
              document.getElementById('elementText').value = ''
            }            

            if(styleSheet[i].width !== undefined) {
              document.getElementById('elementWidth').value = styleSheet[i].width;
            }else{
              document.getElementById('elementWidth').value = ''
            }

            if(styleSheet[i].height !== undefined) {
              document.getElementById('elementHeight').value = styleSheet[i].height;
            } else {
              document.getElementById('elementHeight').value = ''
            }
            
            if(styleSheet[i].paddingTop !== undefined) {
              document.getElementById('elementPaddingTop').value = 'styleSheet[i].paddingTop'
            } else{
              document.getElementById('elementPaddingTop').value = ''
            }

            if(styleSheet[i].paddingBottom !== undefined) {
              document.getElementById('elementPaddingBottom').value = styleSheet[i].paddingBottom;
            } else{
              document.getElementById('elementPaddingBottom').value = ''
            }

            if(styleSheet[i].paddingLeft !== undefined) {
              document.getElementById('elementPaddingLeft').value = styleSheet[i].paddingLeft;
            } else {
              document.getElementById('elementPaddingLeft').value = ''
            }
            
            if(styleSheet[i].paddingRight !== undefined) {
              document.getElementById('elementPaddingRight').value = styleSheet[i].paddingRight;
            } else{
              document.getElementById('elementPaddingRight').value = ''
            }

            if(styleSheet[i].display !== undefined) {
              document.getElementById('elementDisplay').value = styleSheet[i].display;
            } else {
              document.getElementById('elementDisplay').value = ''
            }
            
            
          } catch {}
        }
      });
    }
  }

  // REMOVE FOCUS
  const removeFocus = () => {
    console.log(styleSheet)
    try{
      document.getElementById(element).style.border = "none";
      element = '';
    } catch {}
  }
  
  // DELETE ELEMENT
  const deleteElement = () => {
    document.getElementById(element).remove();
    element = '';
  }

  // DUPLICATE ELEMENT
  const duplicateElement = () => {
    var currentElement = document.getElementById(element)
    var duplicateElement = currentElement.cloneNode(true);
    duplicateElement.id = uniqueId;
    // currentElement.parentNode.appendChild(duplicateElement);
    // currentElement.nextSibling.appendChild(duplicateElement);
    // currentElement.insertAdjacentHTML("afterend", "Yo was it");
    currentElement.parentNode.insertBefore(duplicateElement, currentElement);
    document.getElementById(uniqueId).style.border = "none";
    uniqueId += 1;
  }

  // Move Up ELEMENT
  const moveUpElement = () => {
    var currentElement = document.getElementById(element)
    var upperElement = currentElement.previousElementSibling.id;
    console.log(currentElement, upperElement)
    // currentElement.parentNode.appendChild(duplicateElement);
    // currentElement.nextSibling.appendChild(duplicateElement);
    // currentElement.insertAdjacentHTML("afterend", "Yo was it");
    var id = "page"
    document.getElementById(upperElement).insertBefore(currentElement);
  }


  // Element Options

  const divOptions = () => {
    document.getElementById('elementOptions').style.display = "none";
    document.getElementById('elementStyles').style.display = "block";
  }

  // STYLES

  const showActiveElement = () => {
    document.getElementById("demo").innerHTML = element;
  }

  // Width

  const handleText = (e) =>{
    document.getElementById(element).innerHTML = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].text = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, text: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // Classes

  const handleClasses = (e) =>{
    document.getElementById(element).className = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].class = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, class: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // Width

  const handleWidth = (e) =>{
    document.getElementById(element).style.width = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].width = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, width: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // HEIGHT

  const handleHeight = (e) =>{
    document.getElementById(element).style.height = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].height = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, height: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // Font Size

  const handleFontSize = (e) =>{
    document.getElementById(element).style.fontSize = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].fontSize = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, fontSize: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // Font Weight

  const handleFontWeight = (e) =>{
    document.getElementById(element).style.fontWeight = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].fontWeight = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, fontWeight: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }
  
  // Line Height

  const handleLineHeight = (e) =>{
    document.getElementById(element).style.lineHeight = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].lineHeight = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, lineHeight: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }

  // Font Tect Decoration

  const handleTextDecoration = (e) =>{
    document.getElementById(element).style.textDecoration = e.target.value;
    let checkExist = styleSheet.find(k => k.id === element);
    if(checkExist){
      styleSheet.find((k, i) => {
        if (k.id === element) {
            styleSheet[i].textDecoration = e.target.value;
        }
      });
    }
    else{
      let newStyleSheet = {'id': element, textDecoration: e.target.value}
      styleSheet.push(newStyleSheet)
    }
    console.log(styleSheet)
  }
  
  // Display

    const handleDisplay = (e) =>{
      document.getElementById(element).style.display = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].display = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, display: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    // Flex Direction

    const handleFlexDirection = (e) =>{
      document.getElementById(element).style.flexDirection = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].flexDirection = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, flexDirection: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleAlignItems = (e) =>{
      document.getElementById(element).style.alignItems = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].alignItems = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, alignItems: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleJustifyContent = (e) =>{
      document.getElementById(element).style.justifyContent = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].justifyContent = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, justifyContent: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handlePosition = (e) =>{
      document.getElementById(element).style.position = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].position = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, position: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleTop = (e) =>{
      document.getElementById(element).style.top = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].top = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, top: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBottom = (e) =>{
      document.getElementById(element).style.bottom = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].bottom = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, bottom: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleLeft = (e) =>{
      document.getElementById(element).style.left = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].left = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, left: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleRight = (e) =>{
      document.getElementById(element).style.right = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].right = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, right: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBackgroundColor = (e) =>{
      document.getElementById(element).style.backgroundColor = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].backgroundColor = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, backgroundColor: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleColor = (e) =>{
      document.getElementById(element).style.color = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].color = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, color: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handlePadding = (e) =>{
      document.getElementById(element).style.padding = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].padding = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, padding: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handlePaddingTop = (e) =>{
      document.getElementById(element).style.paddingTop = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].paddingTop = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, paddingTop: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handlePaddingBottom = (e) =>{
      document.getElementById(element).style.paddingBottom = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].paddingBottom = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, paddingBottom: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handlePaddingLeft = (e) =>{
      document.getElementById(element).style.paddingLeft = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].paddingLeft = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, paddingLeft: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handlePaddingRight = (e) =>{
      document.getElementById(element).style.paddingRight = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].paddingRight = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, paddingRight: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleMargin = (e) =>{
      document.getElementById(element).style.margin = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].margin = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, margin: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleMarginTop = (e) =>{
      document.getElementById(element).style.marginTop = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].marginTop = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, marginTop: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleMarginBottom = (e) =>{
      document.getElementById(element).style.marginBottom = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].marginBottom = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, marginBottom: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleMarginLeft = (e) =>{
      document.getElementById(element).style.marginLeft = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].marginLeft = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, marginLeft: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleMarginRight = (e) =>{
      document.getElementById(element).style.marginRight = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].marginRight = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, marginRight: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleShadow = (e) =>{

      let shadowVal;

      if(e.target.value == "noShadow"){
        shadowVal = "none"
      }
      else if(e.target.value == "smallShadow"){
        shadowVal = "0 .125rem .25rem rgba(0,0,0,.075)"
      }
      else if(e.target.value == "regularShadow"){
        shadowVal = "0 .5rem 1rem rgba(0,0,0,.15)"
      }
      else if(e.target.value == "largeShadow"){
        shadowVal = "0 1rem 3rem rgba(0,0,0,.175)"
      }
      document.getElementById(element).style.boxShadow = shadowVal;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].boxShadow = shadowVal;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, boxShadow: shadowVal}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBackgroundImage = (e) =>{
      document.getElementById(element).style.backgroundImage = "url('"+e.target.value+"')";
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].backgroundImage = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, backgroundImage: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleImageSrc = (e) =>{
      document.getElementById(element).src = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].imageSrc = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, imageSrc: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBackgroundPosition = (e) =>{
      document.getElementById(element).style.backgroundPosition = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].backgroundPosition = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, backgroundPosition: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBackgroundSize = (e) =>{
      document.getElementById(element).style.backgroundSize = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].backgroundSize = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, backgroundSize: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleObjectFit = (e) =>{
      document.getElementById(element).style.objectFit = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].objectFit = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, objectFit: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleBorderRadius = (e) =>{
      document.getElementById(element).style.borderRadius = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderRadius = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderRadius: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBorderColor = (e) =>{
      document.getElementById(element).style.borderColor = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderColor = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderColor: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBorderWidth = (e) =>{
      document.getElementById(element).style.borderWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBorder = (e) =>{
      document.getElementById(element).style.borderWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

    const handleBorderTop = (e) =>{
      document.getElementById(element).style.borderTopWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderTopWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderTopWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleBorderBottom = (e) =>{
      document.getElementById(element).style.borderBottomWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderBottomWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderBottomWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleBorderLeft = (e) =>{
      document.getElementById(element).style.borderLeftWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderLeftWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderLeftWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }
    const handleBorderRight = (e) =>{
      document.getElementById(element).style.borderRightWidth = e.target.value;
      let checkExist = styleSheet.find(k => k.id === element);
      if(checkExist){
        styleSheet.find((k, i) => {
          if (k.id === element) {
              styleSheet[i].borderRightWidth = e.target.value;
          }
        });
      }
      else{
        let newStyleSheet = {'id': element, borderRightWidth: e.target.value}
        styleSheet.push(newStyleSheet)
      }
      console.log(styleSheet)
    }

  return (
    <>
      <div className="container-fluid p-0 top-bar">
        {/* <button onClick={showCode}>View</button>
        <button onClick={showCss}>View</button> */}
        <button onClick={grabCode}>Grab Code</button>
      </div>
      <div id="displayCodeSection" className="display-code-section">
        <div onClick={closeShowCode} className="show-code-overlay"></div>
        <div className="show-code-wrapper">
          <div className="show-code-container">
            <div className="show-code-header-wrapper">
              <div className="d-flex align-items-center show-code-header">
                <div className="show-code-tabs">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Html</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Css</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Preview</button>
                  </div>
                </nav>
                </div>
                <div className="close-show-code-wrapper">
                  <button onClick={closeShowCode} class="border-0">&times;</button>
                </div>
              </div>
            </div>
            <div className="show-code-exact">
              <div class="tab-content h-100" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <code id="showHtmlCode"></code>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <code id="showCssCode"></code>
                </div>
                <div class="tab-pane fade d-flex align-items-center justify-content-center" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  *Preview - Feature Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
          <code id="displayCode">

          </code>
      </div>
      <div className="builder d-flex">

        <div className="elements-container">

          <button onClick={addContainer}>Container</button>
          <button onClick={addDiv}>Div</button>
          <button onClick={addButton}>Button</button>
          <button onClick={addAnchor}>A(link)</button>
          <button onClick={addAnchorTag}>anchor</button>
          <button onClick={addImg}>Image</button>
          <button onClick={addParagraph}>P</button>
          <button onClick={addSpan}>Span</button>
          <button onClick={addHeading1}>H1</button>
          <button onClick={addHeading2}>H2</button>
          <button onClick={addHeading3}>H3</button>
          <button onClick={addHeading4}>H4</button>
          <button onClick={addHeading5}>H5</button>
          <button onClick={addHeading6}>H6</button>
          <button onClick={addInput}>Input</button>
          <button onClick={addLabel}>Label</button>
          <button onClick={addUl}>UL</button>
          <button onClick={addLi}>LI</button>

          <button onClick={removeFocus}>Remove Focus</button>

        </div>

        <div onClick={focusedElement} id="Page">

        </div>

        <div id="elementOptions" className="element-options" style={{'marginLeft':'auto'}}>
          <button onClick={showActiveElement}>show</button>
          <button onClick={deleteElement}>Delete Element</button>
          <div id="demo"></div>
        </div>

        <div id="elementStyles" className="element-styles">
          <div id="divOptions">
            
          <button onClick={moveUpElement}>Move Up</button>
            <input type="text" id="elementClasses" placeholder=".class" onKeyUp={handleClasses}/>
            <textarea id="elementText" onKeyUp={handleText}></textarea>
            <input type="text" id="elementWidth" placeholder="width" onKeyUp={handleWidth}/>
            <input type="text" id="elementHeight" placeholder="height" onChange={handleHeight}/>

            <label>Font size</label><br/>
            <input id="elementFontSize" type="text" onChange={handleFontSize} placeholder="font size"/>

            <label>Font Weight</label><br/>
            <input id="elementFontWeight" type="text" onChange={handleFontWeight} placeholder="font weight"/>
            
            <label>Line Height</label><br/>
            <input id="elementLineHeight" type="text" onChange={handleLineHeight} placeholder="font weight"/>

            <label>Text Decoration</label><br/>
            <select id="elementTextDecoration" onChange={handleTextDecoration}>
              <option value="none">none</option>
              <option value="underline">underline</option>
              <option value="overline">overline</option>
              <option value="line-through">line through</option>
              <option value="underline overline">underline overline</option>
            </select>

            <label>Display</label><br/>
            <select id="elementDisplay" onChange={handleDisplay}>
              <option value="none" selected disabled hidden>Display</option>
              <option value="initial">Display</option>
              <option value="flex">Flex</option>
              <option value="inline-flex">Inline Flex</option>
              <option value="block">Block</option>
              <option value="inline-block">Inline Block</option>
            </select>

            <label>Flex Direction</label><br/>
            <select id="elementFlexDirection" onChange={handleFlexDirection}>
              <option value="none" selected disabled hidden>Flex Direction</option>
              <option value="column">column</option>
              <option value="row">row</option>
              <option value="row-reverse">row reverse</option>
              <option value="column-reverse">column reverse</option>
            </select>

            <label>Align Item</label><br/>
            <select id="elementAlignItems" onChange={handleAlignItems}>
              <option value="none" selected disabled hidden>Display</option>
              <option value="initial">Align Items</option>
              <option value="center">Center</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="baseline">Baseline</option>
              <option value="stretch">Stretch</option>
            </select>

            <label>Justify Content</label><br/>
            <select id="elementJustifyContent" onChange={handleJustifyContent}>
              <option value="none" selected disabled hidden>Display</option>
              <option value="initial">Justify Content</option>
              <option value="center">Center</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>

            <label>Position</label><br/>
            <select id="elementPosition" onChange={handlePosition}>
              <option value="none" selected disabled hidden>Position</option>
              <option value="inherit">Position</option>
              <option value="relative">Relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">Fixed</option>
              <option value="sticky">Sticky</option>
              <option value="static">Static</option>
            </select>

            <label>Inside margin</label><br/>
            <input id="elementTop" type="text" onChange={handleTop} placeholder="T"/>
            <input id="elementBottom" type="text" onChange={handleBottom} placeholder="B"/>
            <input id="elementLeft" type="text" onChange={handleLeft} placeholder="L"/>
            <input id="elementRight" type="text" onChange={handleRight} placeholder="R"/>

            <label>Image Src</label><br/>
            <input id="elementImageSrc" type="text" onChange={handleImageSrc} placeholder="Image SRC"/>

            <label>Object Fit</label><br/>
            <select id="elementBackgroundPosition" onChange={handleObjectFit}>
              <option value="none" selected disabled hidden>Object Fit</option>
              <option value="cover">cover</option>
              <option value="contain">contain</option>
            </select>
            
            <label>Background Image</label><br/>
            <input id="elementBackgroundImage" type="text" onChange={handleBackgroundImage} placeholder="Image BG"/>

            <label>Background Position</label><br/>
            <select id="elementBackgroundPosition" onChange={handleBackgroundPosition}>
              <option value="none" selected disabled hidden>Background Position</option>
              <option value="center">center</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
            </select>

            <label>Background Size</label><br/>
            <select id="elementBackgroundPosition" onChange={handleBackgroundSize}>
              <option value="none" selected disabled hidden>Background Size</option>
              <option value="cover">cover</option>
              <option value="contain">contain</option>
            </select>

            <label>Background</label><br/>
            <input id="elementBackgroundColor" type="color" onChange={handleBackgroundColor}/>

            <label>Color</label><br/>
            <input id="elementColor" type="color" onChange={handleColor}/>

            <label>Padding</label><br/>
            <input id="elementPadding" type="text" onChange={handlePadding} placeholder="A"/>
            <input id="elementPaddingTop" type="text" onChange={handlePaddingTop} placeholder="T"/>
            <input id="elementPaddingBottom" type="text" onChange={handlePaddingBottom} placeholder="B"/>
            <input id="elementPaddingLeft" type="text" onChange={handlePaddingLeft} placeholder="L"/>
            <input id="elementPaddingRight" type="text" onChange={handlePaddingRight} placeholder="R"/>

            <label>Margin</label><br/>
            <input id="elementMargin" type="text" onChange={handleMargin} placeholder="A"/>
            <input id="elementMarginTop" type="text" onChange={handleMarginTop} placeholder="T"/>
            <input id="elementMarginBottom" type="text" onChange={handleMarginBottom} placeholder="B"/>
            <input id="elementMarginLeft" type="text" onChange={handleMarginLeft} placeholder="L"/>
            <input id="elementMarginRight" type="text" onChange={handleMarginRight} placeholder="R"/>
            
            <label>Shadow</label><br/>
            <select id="elementShadow" onChange={handleShadow}>
              <option value="none" selected disabled hidden>Shadow</option>
              <option value="noShadow">no shadow</option>
              <option value="smallShadow">small</option>
              <option value="regularShadow">regular</option>
              <option value="largeShadow">large</option>
            </select>

            <label>Border</label><br/><br/>

            <label>Border Radius</label><br/>
            <input id="elementBorderRadius" type="text" onChange={handleBorderRadius} placeholder="border radius"/>
            <input id="elementBorderColor" type="color" onChange={handleBorderColor}/>
            <input id="elementBorderWidth" type="text" onChange={handleBorderWidth} placeholder="width"/>
            <br></br>
            <input id="elementBorder" type="text" onChange={handleBorder} placeholder="A"/>
            <input id="elementBorderTop" type="text" onChange={handleBorderTop} placeholder="T"/>
            <input id="elementBorderBottom" type="text" onChange={handleBorderBottom} placeholder="B"/>
            <input id="elementBorderLeft" type="text" onChange={handleBorderLeft} placeholder="L"/>
            <input id="elementBorderRight" type="text" onChange={handleBorderRight} placeholder="R"/>

            <button onClick={duplicateElement}>Duplicate Element</button>
            <button onClick={deleteElement}>Delete Element</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;

# NgxDisplay

<p align='center'>
    <img src="https://raw.githubusercontent.com/leonamtv/ngx-display/master/projects/ngx-display/assets/logo.png" width=700>
</p>

This library renders **seven and sixteen segments** displays according to the input parameters. [Live Demo](https://leonamtv.github.io/ngx-display) It exports four components:

* SevenSegmentComponent `<seven-segment>`: Renders a seven segments display according to a **bitmap**, following the standard below:
<p align='center'>
    <img src="https://raw.githubusercontent.com/leonamtv/ngx-display/master/projects/ngx-display//sevenSeg.png" width=100>
</p>

* SevenSegmentDigitComponent `<seven-segment-digit>`: Renders a digit in a seven segments display, according to the table below:


| digit | bitMask (decimal) | digit | bitMask (decimal) |
| :------: | :-------: | :------: | :-------: |
| 0 |   126 | j |   60  |
| 1 |   48  | k |   47  |      
| 2 |   109 | l |   14  |      
| 3 |   121 | m |   21  |      
| 4 |   51  | n |   118 |      
| 5 |   91  | o |   29  |      
| 6 |   95  | p |   103 |      
| 7 |   112 | q |   115 |      
| 8 |   127 | r |   5   |      
| 9 |   123 | s |   91  |      
| a |   119 | t |   15  |      
| b |   31  | u |   62  |      
| c |   78  | v |   62  |      
| d |   61  | w |   28  |      
| e |   79  | x |   55  |      
| f |   71  | y |   59  |      
| g |   95  | z |   109 |      
| h |   55  |   |   0   |      
| i |   6   | - |   1   |        

* SixteenSegmentComponent `<sixteen-segment>`: Renders a sixteen segments display according to a **bitmap**, following the standard below:
<p align='center'>
    <img src="https://raw.githubusercontent.com/leonamtv/ngx-display/master/projects/ngx-display//sixteenSeg.png" width=200>
</p>

* SixteenSegmentDigitComponent `<sixteen-segment-digit>`: Renders a digit in a sixteen segments display, according to the table below:

| digit | bitMask (decimal) | digit | bitMask (decimal) |
| :------: | :-------: | :------: | :-------: |
| 0 |  75687   | W |  9780    |                              
| 1 |  38      | X |  17426   |                          
| 2 |  70541   | Y |  12716   |                              
| 3 |  65965   | Z |  66947   |                              
| 4 |  12332   | a |  7040    |                              
| 5 |  78225   | b |  15104   |                              
| 6 |  78761   | c |  4864    |                              
| 7 |  65573   | d |  2220    |                              
| 8 |  78765   | e |  5888    |                              
| 9 |  78253   | f |  38921   |                              
| A |  78381   | g |  112896  |                              
| B |  100781  | h |  14848   |                              
| C |  74625   | i |  2048    |                              
| D |  100773  | j |  35584   |                              
| E |  78721   | k |  34834   |                              
| F |  78337   | l |  8704    |                              
| G |  74665   | m |  6696    |                              
| H |  12844   | n |  6656    |                              
| I |  100737  | o |  6912    |                              
| J |  932     | p |  111104  |                              
| K |  12818   | q |  112640  |                              
| L |  9088    | r |  4608    |                              
| M |  25126   | s |  80128   |                              
| N |  25140   | t |  13056   |                              
| O |  74661   | u |  2816    |                              
| P |  78349   | v |  1536    |                              
| Q |  74677   | w |  1584    |                              
| R |  78365,  | x |  17426   |                              
| S |  78249   | y |  32940   |                              
| T |  100353  | z |  5376    |                              
| U |  9124    |   |   0      |                         
| V |  9730    | , |  1024    |               
| . |  64      | - |  4104    |
| " | 40960 |


## Usage

First of all, import the **NgxDisplayModule** in your **AppModule** :

```typescript
import { NgModule } from '@angular/core';
import { NgxDisplayModule } from 'NgxDisplayModule';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    NgxDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Seven Segment

```html
<seven-segment
    [randomNoise]="randomNoise"
    [width]="width"
    [height]="height"
    [glowColor]="glowColor"
    [glowBlur]="glowBlur"
    [backgroundColor]="backgroundColor"
    [colorOn]="colorOn"
    [colorOff]="colorOff"
    [bitMask]="bitMask"
></seven-segment>
```

Where:

* **randomNoise** (boolean) = defines if there's or if there's not a random glow
* **width** (number) = width of the display
* **height** (number)= height of the display
* **glowColor** (string) = string containing the color of the glow. Tested with be RGB, HEX, RGBA.
* **glowBlur** (number) = length of glow's blur
* **backgroundColor** (string) = string containing the display's background color. Tested with be RGB, HEX, RGBA.
* **colorOn** (string) = string containing the color of display's segments when they are turned on. Tested with be RGB, HEX, RGBA.  
* **colorOff** (string) = string containing the color of display's segments when they are turned off. Tested with be RGB, HEX, RGBA.    
* **bitMask** (number) = bitMask representing the state of the display

### Seven Segment Digit

Same as above, except instead of passing a **bitmask** you pass a character to be drawn in the display:

```html
<seven-segment-digit
    [randomNoise]="randomNoise"
    [width]="width"
    [height]="height"
    [glowColor]="glowColor"
    [glowBlur]="glowBlur"
    [backgroundColor]="backgroundColor"
    [colorOn]="colorOn"
    [colorOff]="colorOff"
    [character]="character"
></seven-segment-digit>
```

Where:

* **randomNoise** (boolean) = defines if there's or if there's not a random glow
* **width** (number) = width of the display
* **height** (number)= height of the display
* **glowColor** (string) = string containing the color of the glow. Tested with be RGB, HEX, RGBA.
* **glowBlur** (number) = length of glow's blur
* **backgroundColor** (string) = string containing the display's background color. Tested with be RGB, HEX, RGBA.
* **colorOn** (string) = string containing the color of display's segments when they are turned on. Tested with be RGB, HEX, RGBA.  
* **colorOff** (string) = string containing the color of display's segments when they are turned off. Tested with be RGB, HEX, RGBA.    
* **character** (string) = one of the characters below (it can be either lower case characters or upper case ones. They will be converted to lower case before rendering.):

|digit|digit|digit|digit|
|:---:|:---:|:---:|:---:|
| 0 | 1 | 2 | 3 |
| 4 | 5 | 6 | 7 |
| 8 | 9 | a | b |
| c | d | e | f |
| g | h | i | j |
| k | l | m | n |
| o | p | q | r |
| s | t | u | v |
| w | x | y | z |
| `<space>`  | - |


### Sixteen Segment

```html
<sixteen-segment
    [randomNoise]="randomNoise"
    [width]="width"
    [height]="height"
    [glowColor]="glowColor"
    [glowBlur]="glowBlur"
    [backgroundColor]="backgroundColor"
    [colorOn]="colorOn"
    [colorOff]="colorOff"
    [bitMask]="bitMask"
></sixteen-segment>
```

Where:

* **randomNoise** (boolean) = defines if there's or if there's not a random glow
* **width** (number) = width of the display
* **height** (number)= height of the display
* **glowColor** (string) = string containing the color of the glow. Tested with be RGB, HEX, RGBA.
* **glowBlur** (number) = length of glow's blur
* **backgroundColor** (string) = string containing the display's background color. Tested with be RGB, HEX, RGBA.
* **colorOn** (string) = string containing the color of display's segments when they are turned on. Tested with be RGB, HEX, RGBA.  
* **colorOff** (string) = string containing the color of display's segments when they are turned off. Tested with be RGB, HEX, RGBA.    
* **bitMask** (number) = bitMask representing the state of the display

### Sixteen Segment Digit

Same as above, except instead of passing a **bitmask** you pass a character to be drawn in the display:

```html
<sixteen-segment-digit
    [randomNoise]="randomNoise"
    [width]="width"
    [height]="height"
    [glowColor]="glowColor"
    [glowBlur]="glowBlur"
    [backgroundColor]="backgroundColor"
    [colorOn]="colorOn"
    [colorOff]="colorOff"
    [character]="character"
></sixteen-segment-digit>
```

Where:

* **randomNoise** (boolean) = defines if there's or if there's not a random glow
* **width** (number) = width of the display
* **height** (number)= height of the display
* **glowColor** (string) = string containing the color of the glow. Tested with be RGB, HEX, RGBA.
* **glowBlur** (number) = length of glow's blur
* **backgroundColor** (string) = string containing the display's background color. Tested with be RGB, HEX, RGBA.
* **colorOn** (string) = string containing the color of display's segments when they are turned on. Tested with be RGB, HEX, RGBA.  
* **colorOff** (string) = string containing the color of display's segments when they are turned off. Tested with be RGB, HEX, RGBA.    
* **character** (string) = one of the characters below:

|digit|digit|digit|digit|digit|digit|digit|digit|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 8 | 9 | a | b | c | d | e | f |
| g | h | i | j | k | l | m | n |
| o | p | q | r | s | t | u | v |
| w | x | y | z | A | B | C | D |
| E | F | G | H | I | J | K | L |
| M | N | O | P | Q | R | S | T |
| U | V | W | X | Y | Z | `<space>`  |,|
|.| - | " |

## Examples

### Example 1: Seven Segment Display alphabet

`app.component.html:`
```html
<seven-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="'0'"  
    [glowBlur]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></seven-segment-digit>
<seven-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="'1'"  
    [glowBlur]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></seven-segment-digit>
...
<seven-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="' '"  
    [glowBlur]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></seven-segment-digit>
```

Result (some adicional css were added only for alignment and general background color):

<p align='center'>
    <img src='https://raw.githubusercontent.com/leonamtv/ngx-display/master/projects/ngx-display//sevenSegAlphabet.png' width=850>
</p>

### Example 2: Sixteen Segment Display alphabet

`app.component.html:`
```html
<sixteen-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="'0'"  
    [glowBlur]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></sixteen-segment-digit>
<sixteen-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="'1'"  
    [glowBlur]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></sixteen-segment-digit>
...
<sixteen-segment-digit 
    [height]="150" 
    [width]="108" 
    [randomNoise]="true" 
    [character]="' '"  [glowBlu
    r]="30" 
    [colorOn]="'#ffdd8f'" 
    [colorOff]="'rgba(255, 255, 255, 0.1)'" 
    [glowColor]="'#ff9a1f'" 
    [backgroundColor]="'#16161a'"
></sixteen-segment-digit>
```

Result (some adicional css were added only for alignment and general background color):

<p align='center'>
    <img src='https://raw.githubusercontent.com/leonamtv/ngx-display/master/projects/ngx-display//sixteenSegAlphabet.png' width=850>
</p>
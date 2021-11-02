import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  bitMask: number = 0
  
  char1: string = ''
  char2: string = ''
  char3: string = ''
  char4: string = ''
  char5: string = ''
  char6: string = ''
  char7: string = ''
  char8: string = ''
  char9: string = ''
  char10: string = ''

  charV1: string = ''
  charV2: string = ''
  charV3: string = ''
  charV4: string = ''
  charV5: string = ''
  charV6: string = ''
  charV7: string = ''
  charV8: string = ''
  charV9: string = ''
  charV10: string = ''

  timeChar1: string = ''
  timeChar2: string = ''
  timeChar3: string = ''
  timeChar4: string = ''
  timeChar5: string = ''
  timeChar6: string = ''
  timeChar7: string = ''
  timeChar8: string = ''
  timeChar9: string = ''
  timeChar10: string = ''

  hour0char: string = ''
  hour1char: string = ''
  hour2char: string = ''
  minute0char: string = ''
  minute1char: string = ''
  minute2char: string = ''
  seconds0char: string = ''
  seconds1char: string = ''
  seconds2char: string = ''

  i: number = 0
  j: number = 0

  textGandalf: string = '"All we have to decide is what to do with the time that is given us." '
  textVader: string = '"YOU HAVE CONTROLLED YOUR FEAR." '


  chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  constructor () {


    const indexGandalf =  ( n : number ) => {
      return n % this.textGandalf.length
    }

    setInterval (() => {
      this.char1 = this.textGandalf.charAt(indexGandalf( this.i ))
      this.char2 = this.textGandalf.charAt(indexGandalf( this.i + 1 ))
      this.char3 = this.textGandalf.charAt(indexGandalf( this.i + 2 ))
      this.char4 = this.textGandalf.charAt(indexGandalf( this.i + 3 ))
      this.char5 = this.textGandalf.charAt(indexGandalf( this.i + 4 ))
      this.char6 = this.textGandalf.charAt(indexGandalf( this.i + 5 ))
      this.char7 = this.textGandalf.charAt(indexGandalf( this.i + 6 ))
      this.char8 = this.textGandalf.charAt(indexGandalf( this.i + 7 ))
      this.char9 = this.textGandalf.charAt(indexGandalf( this.i + 8 ))
      this.char10 = this.textGandalf.charAt(indexGandalf( this.i + 9 ))
      this.i = ( this.i + 1 ) % this.textGandalf.length
    }, 500)


    const indexVader =  ( n : number ) => {
      return n % this.textVader.length
    }

    setInterval (() => {
      this.charV1 = this.textVader.charAt(indexVader( this.j ))
      this.charV2 = this.textVader.charAt(indexVader( this.j + 1 ))
      this.charV3 = this.textVader.charAt(indexVader( this.j + 2 ))
      this.charV4 = this.textVader.charAt(indexVader( this.j + 3 ))
      this.charV5 = this.textVader.charAt(indexVader( this.j + 4 ))
      this.charV6 = this.textVader.charAt(indexVader( this.j + 5 ))
      this.charV7 = this.textVader.charAt(indexVader( this.j + 6 ))
      this.charV8 = this.textVader.charAt(indexVader( this.j + 7 ))
      this.charV9 = this.textVader.charAt(indexVader( this.j + 8 ))
      this.charV10 = this.textVader.charAt(indexVader( this.j + 9 ))
      this.j = ( this.j + 1 ) % this.textVader.length
    }, 500)


    this.timeChar1  = '-'
    this.timeChar2  = '-'
    this.timeChar3  = '-'
    this.timeChar4  = '-'
    this.timeChar5  = '-'
    this.timeChar6  = '-'
    this.timeChar7  = '-'
    this.timeChar8  = '-'
    this.timeChar9  = '-'
    this.timeChar10 = '-'
    setInterval (() => {
      let date = Math.round(new Date().getTime()/1000)
      let digits = date.toString().split('');
      let realDigits = digits.map(Number)
      this.timeChar1  = realDigits[0].toString() 
      this.timeChar2  = realDigits[1].toString()
      this.timeChar3  = realDigits[2].toString()
      this.timeChar4  = realDigits[3].toString()
      this.timeChar5  = realDigits[4].toString()
      this.timeChar6  = realDigits[5].toString()
      this.timeChar7  = realDigits[6].toString()
      this.timeChar8  = realDigits[7].toString()
      this.timeChar9  = realDigits[8].toString()
      this.timeChar10 = realDigits[9].toString()
    }, 1000)


    this.hour0char     = '-'
    this.hour1char     = '-'
    this.hour2char     = 'H'
    this.minute0char   = '-'
    this.minute1char   = '-'
    this.minute2char   = 'M'
    this.seconds0char  = '-'
    this.seconds1char  = '-'
    this.seconds2char  = 'S'

    setInterval (() => {
      let date = new Date()

      let seconds = (date.getSeconds()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      let hour    = (date.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      let minutes = (date.getMinutes()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      
      this.hour0char     = hour.toString().charAt(0)
      this.hour1char     = hour.toString().charAt(1)

      this.minute0char   = minutes.toString().charAt(0)
      this.minute1char   = minutes.toString().charAt(1)

      this.seconds0char  = seconds.toString().charAt(0)
      this.seconds1char  = seconds.toString().charAt(1)

    }, 1000)


  }

}

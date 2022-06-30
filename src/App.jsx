import React, { useState } from "react"

import axios from "axios"

import "./App.css"

import { Nav, SearchLogo, SearchTitle } from "./style"

import { Form, Input, SearchImg } from "./style"

import { Infos, PInfosBox, PInfos } from "./style"

import { mapIcon, searchIcon } from "./assets/index"

export default function searchME() {
  const [ cep, setCep ] = useState("")
  const [ bairroo, setBairro ] = useState("")
  const [ rua, setRua ] = useState("")
  const [ comple, setComple ] = useState("")
  const [ local, setLocal ] = useState("")
  const [ uff, setUF ] = useState("")
  const [ ibgee, setIBGE ] = useState("")
  const [ dddd, setDDD ] = useState("")
  
  const searchCEP = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((r) => {
      setBairro(r.data.bairro)  
      setRua(r.data.longradouro)
      setComple(r.data.complemento)
      setLocal(r.data.localidade)
      setUF(r.data.uf)
      setIBGE(r.data.ibge)
      setDDD(r.data.ddd)
      console.log(r.data)
    })
  }

  function FormCEP() {
    return(
      <Infos>
        <PInfosBox>
          <PInfos>Cep: {cep}</PInfos>
          <PInfos>Bairro: {bairroo}</PInfos>
          <PInfos>Rua: {rua}</PInfos>
          <PInfos>Complemento: {comple}</PInfos>
        </PInfosBox>
        <PInfosBox>
          <PInfos>Localidade: {local}</PInfos>
          <PInfos>Uf: {uff}</PInfos>
          <PInfos>Ibge: {ibgee}</PInfos>
          <PInfos>DDD: {dddd}</PInfos>
        </PInfosBox>
      </Infos>
    )
  }

  return(
    <div className="divGlobal">
      <Nav>
        <SearchLogo 
        src={mapIcon}
        />
        <SearchTitle>Search ME</SearchTitle>
      </Nav>
      <Form>
        <Input
          value={cep}
          placeholder="CEP"
          onChange={(e) => {setCep(e.target.value)}}
        />    
        <SearchImg
          onClick={() => {searchCEP()}}
          src={searchIcon}
        />
      </Form>
      <FormCEP/>
    </div>
  )
}

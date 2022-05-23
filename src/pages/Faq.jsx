import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Faq() {
  return (
    <>
    <div className="container flex flex-col mx-auto">
      <h1 className='text-3xl font-bold'>Bem Vindo ao Faq!</h1>

      <h2 className='text-2xl'>Qual horário comercial?</h2>
      <p>7:30 às 17:30, Segunda a Sexta.</p>

      <h2>Como faço um pedido online?</h2>
      <p>Primeiramente faça um cadastro na nossa plataforma online <a href="https://milvest.vesti.mobi/">aqui</a>. Depois de escolher as peças e quantidades, uma das nossas vendedoras irá realizar o contato com você e finalizar o pedido.</p>

      <h2>Consigo fazer o pedido pelo o Whatsapp em vez de fazer na plataforma?</h2>
      <p>Sim. Tanto faz se for pela plataforma ou pelo Whatsapp.</p>

      <h2>Quais são os meios de pagamento na plataforma?</h2>
      <p>Os meios de pagamento são: Cartão de Crédito e PIX.</p>

    </div>
    
    </>
  )
}

"use client"
import { Container } from "@mui/material"
import Store from "../components/Store"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Container sx={{marginY: "80px"}}>
        <Store />
      </Container>
    </>
  )
}

import React from 'react'
import { Card } from "flowbite-react"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineDiscord } from "react-icons/ai";

const Footer = () => {
  return (
    <Card className="max-w-full m-5">
    <div className="flex justify-center items-center px-4 pt-4">
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/putriathz/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram size="40px" />
        </a>
        <a href="https://github.com/athirputri" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="40px" />
        </a>
        <a href="https://discord.com/channels/@athiraaww" target="_blank" rel="noopener noreferrer">
          <AiOutlineDiscord size="40px" />
        </a>
        <a href="https://www.linkedin.com/in/putri-athira-zahra-15835a32b/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="40px" />
        </a>
      </div>
    </div>
  </Card>
  
  )
}

export default Footer
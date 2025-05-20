import { Card } from "flowbite-react"
import tnc from "/images/tnc.png"
import library from "/images/library.png"
import absen from "/images/absen.png"
import roomease from "/images/roomease.png"
import file from "/images/file.png"
import POS from "/images/POS.png"
import { useState } from "react"

const Project = () => {
  return (
    <Card className="max-w-full m-6">
      <div className="flex flex-wrap justify-center px-5 pt-5 gap-20">
        <div className="flex flex-col items-center">
          <a href="https://t-and-c.vercel.app/">
            <img alt="Taste and Craft" height="150" src={tnc} width="150" className="mb-3 rounded-full shadow-lg" />
          </a>
          <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            <a href="https://t-and-c.vercel.app/">Taste and Craft</a>
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Web E-Commerce</span>
        </div>

        <div className="flex flex-col items-center">
          <img alt="Library" height="150" src={library} width="150" className="mb-3 rounded-full shadow-lg" />
          <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Library
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">(On Progress)</span>
        </div>

        <div className="flex flex-col items-center">
        <a href="https://cv-putri.vercel.app/">
            <img alt="Curriculum Vitae" height="150" src={file} width="150" className="mb-3 rounded-full shadow-lg" />
          </a>
          <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            <a href="https://cv-putri.vercel.app/">Portofolio</a>
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Portofolio</span>
        </div>

        <div className="flex flex-col items-center">
          <img alt="Room Ease" height="150" src={roomease} width="150" className="mb-3 rounded-full shadow-lg" />
          <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Room Ease
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">(On Progress)</span>
        </div>

        <div className="flex flex-col items-center">
          <img alt="Point Of Sale" height="125" src={POS} width="129" className="mb-3" />
          <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Point Of Sale
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">(On Progress)</span>
        </div>
      </div>
    </Card>
  );
};

export default Project
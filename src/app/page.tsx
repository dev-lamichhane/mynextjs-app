"use client"
import SpinningImage from './components/spinningImage'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <SpinningImage />
      </div>
    </div>
  );
}

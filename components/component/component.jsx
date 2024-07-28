/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/j2td4r6S3vK
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function Component() {
  const [activeTab, setActiveTab] = useState("los-santos")
  const [colina, setColina] = useState({ time: 0, isRunning: false })
  const [corona, setCovid] = useState({ time: 0, isRunning: false })
  const [low, setLow] = useState({ time: 0, isRunning: false })
  const [ldm, setLdm] = useState({ time: 0, isRunning: false })
  const [wh, setWh] = useState({ time: 0, isRunning: false })
  const [n1, setN1] = useState({ time: 0, isRunning: false })
  const [n2, setN2] = useState({ time: 0, isRunning: false })
  const [quebrados, setQuebrados] = useState({ time: 0, isRunning: false })
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor((time % 3600000) / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }
  const handleStartColina = () => {
    setColina((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopColina = () => {
    setColina((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetColina = () => {
    setColina({ time: 0, isRunning: false })
  }
  const handleStartCovid = () => {
    setCovid((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopCovid = () => {
    setCovid((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetCovid = () => {
    setCovid({ time: 0, isRunning: false })
  }
  const handleStartLow = () => {
    setLow((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopLow = () => {
    setLow((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetLow = () => {
    setLow({ time: 0, isRunning: false })
  }
  const handleStartLdm = () => {
    setLdm((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopLdm = () => {
    setLdm((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetLdm = () => {
    setLdm({ time: 0, isRunning: false })
  }
  const handleStartWh = () => {
    setWh((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopWh = () => {
    setWh((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetWh = () => {
    setWh({ time: 0, isRunning: false })
  }
  const handleStartN1 = () => {
    setN1((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopN1 = () => {
    setN1((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetN1 = () => {
    setN1({ time: 0, isRunning: false })
  }
  const handleStartN2 = () => {
    setN2((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopN2 = () => {
    setN2((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetN2 = () => {
    setN2({ time: 0, isRunning: false })
  }
  const handleStartQuebrados = () => {
    setQuebrados((prevState) => ({ ...prevState, isRunning: true }))
  }
  const handleStopQuebrados = () => {
    setQuebrados((prevState) => ({ ...prevState, isRunning: false }))
  }
  const handleResetQuebrados = () => {
    setQuebrados({ time: 0, isRunning: false })
  }
  useEffect(() => {
    let intervalId
    if (colina.isRunning) {
      intervalId = setInterval(() => {
        setColina((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [colina.isRunning])
  useEffect(() => {
    let intervalId
    if (corona.isRunning) {
      intervalId = setInterval(() => {
        setCovid((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [corona.isRunning])
  useEffect(() => {
    let intervalId
    if (low.isRunning) {
      intervalId = setInterval(() => {
        setLow((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [low.isRunning])
  useEffect(() => {
    let intervalId
    if (ldm.isRunning) {
      intervalId = setInterval(() => {
        setLdm((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [ldm.isRunning])
  useEffect(() => {
    let intervalId
    if (wh.isRunning) {
      intervalId = setInterval(() => {
        setWh((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [wh.isRunning])
  useEffect(() => {
    let intervalId
    if (n1.isRunning) {
      intervalId = setInterval(() => {
        setN1((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [n1.isRunning])
  useEffect(() => {
    let intervalId
    if (n2.isRunning) {
      intervalId = setInterval(() => {
        setN2((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [n2.isRunning])
  useEffect(() => {
    let intervalId
    if (quebrados.isRunning) {
      intervalId = setInterval(() => {
        setQuebrados((prevState) => ({ ...prevState, time: prevState.time + 1000 }))
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [quebrados.isRunning])
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">GTA Timers</h1>
      </div>
      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList className="bg-muted px-6 py-4 border-b">
            <TabsTrigger value="los-santos">LOS SANTOS</TabsTrigger>
            <TabsTrigger value="las-venturas">LAS VENTURAS</TabsTrigger>
            <TabsTrigger value="san-fierro">SAN FIERRO</TabsTrigger>
          </TabsList>
          <TabsContent value="los-santos" className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">COLINA</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(colina.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartColina} disabled={colina.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopColina} disabled={!colina.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetColina}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">CORONA</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(corona.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartCovid} disabled={corona.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopCovid} disabled={!corona.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetCovid}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">LOW</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(low.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartLow} disabled={low.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopLow} disabled={!low.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetLow}>Reset</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="las-venturas" className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">LDM</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(ldm.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartLdm} disabled={ldm.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopLdm} disabled={!ldm.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetLdm}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">WH</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(wh.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartWh} disabled={wh.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopWh} disabled={!wh.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetWh}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">n1</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(n1.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartN1} disabled={n1.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopN1} disabled={!n1.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetN1}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">n2</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(n2.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartN2} disabled={n2.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopN2} disabled={!n2.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetN2}>Reset</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">QUEBRADOS</h2>
                <div className="text-4xl font-bold mb-4">{formatTime(quebrados.time)}</div>
                <div className="flex justify-between">
                  <Button onClick={handleStartQuebrados} disabled={quebrados.isRunning}>
                    Start
                  </Button>
                  <Button onClick={handleStopQuebrados} disabled={!quebrados.isRunning}>
                    Stop
                  </Button>
                  <Button onClick={handleResetQuebrados}>Reset</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="san-fierro" className="p-6">
            <div className="text-center text-muted-foreground">This tab is currently empty.</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
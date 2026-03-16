import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { provinceData } from '../data/musicData'
import ChinaMapSVG from './ChinaMapSVG'
import './MainMap.css'

const MainMap = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [currentPlaying, setCurrentPlaying] = useState(null)
  const audioRef = useRef(null)

  const handleProvinceClick = (provinceId) => {
    const province = provinceData[provinceId]
    if (!province) return

    setCurrentPlaying(province)
    
    // 模拟音频播放（实际项目中需要真实音频文件）
    console.log(`播放 ${province.name} 的音乐: ${province.song}`)
  }

  const handleProvinceDoubleClick = (provinceId) => {
    navigate(`/province/${provinceId}`)
  }

  const handleGameClick = () => {
    navigate('/game')
  }

  const handleNewsClick = () => {
    navigate('/news')
  }

  return (
    <div>
      <header className="header">
        <h1>中国音乐文化地图</h1>
        <div className="header-actions">
          <div className="user-info">
            <span className="user-role">{user.role === 'admin' ? '管理员' : '游客'}</span>
            <span> - {user.username}</span>
          </div>
          <button onClick={onLogout} className="btn btn-secondary">退出登录</button>
        </div>
      </header>

      <div className="main-map-container content">
        <h2 className="map-title">探索华夏音韵</h2>
        <p className="map-subtitle">单击省份聆听二胡雅韵，双击探索文化底蕴</p>

        <div className="map-wrapper">
          <ChinaMapSVG 
            onProvinceClick={handleProvinceClick}
            onProvinceDoubleClick={handleProvinceDoubleClick}
            currentPlaying={currentPlaying?.id}
          />
          
          <div className="map-instructions">
            <p><span className="instruction-highlight">单击</span> 省份 - 播放该地区二胡音乐片段</p>
            <p><span className="instruction-highlight">双击</span> 省份 - 查看文化概述与音乐特色</p>
          </div>
        </div>

        {currentPlaying && (
          <div className="audio-player">
            <h3>{currentPlaying.name}</h3>
            <p>正在播放：{currentPlaying.song}</p>
            <audio 
              ref={audioRef}
              controls 
              autoPlay
              src={currentPlaying.audioFile}
            >
              您的浏览器不支持音频播放
            </audio>
          </div>
        )}

        <button onClick={handleGameClick} className="game-button">
          🎵 听音游戏
        </button>

        <button onClick={handleNewsClick} className="news-button">
          📰 琴韵要闻
        </button>
      </div>
    </div>
  )
}

export default MainMap






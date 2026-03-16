import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { musicGameData } from '../data/musicData'
import './MusicGame.css'

const MusicGame = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [currentNote, setCurrentNote] = useState(null)
  const [score, setScore] = useState(0)
  const [totalPlayed, setTotalPlayed] = useState(0)
  const [message, setMessage] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const playRandomNote = () => {
    const randomNote = musicGameData[Math.floor(Math.random() * musicGameData.length)]
    setCurrentNote(randomNote)
    setMessage('请选择你听到的音符')
    setIsPlaying(true)
    
    // 模拟音频播放
    console.log(`播放音符: ${randomNote.name}`)
    
    setTimeout(() => {
      setIsPlaying(false)
    }, 1000)
  }

  const handleNoteSelect = (selectedNote) => {
    if (!currentNote) {
      setMessage('请先点击"播放音符"按钮')
      return
    }

    setTotalPlayed(totalPlayed + 1)

    if (selectedNote.id === currentNote.id) {
      setScore(score + 1)
      setMessage(`✓ 正确！这是 ${currentNote.name}`)
    } else {
      setMessage(`✗ 错误！正确答案是 ${currentNote.name}，你选择的是 ${selectedNote.name}`)
    }

    setTimeout(() => {
      setCurrentNote(null)
      setMessage('')
    }, 2000)
  }

  const handleReset = () => {
    setScore(0)
    setTotalPlayed(0)
    setCurrentNote(null)
    setMessage('')
  }

  const handleBack = () => {
    navigate('/')
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

      <div className="game-container content">
        <button onClick={handleBack} className="back-button">← 返回地图</button>

        <div className="game-card">
          <div className="game-header">
            <h1>听音游戏</h1>
            <p className="game-subtitle">考验你的音乐听力</p>
          </div>

          <div className="score-board">
            <div className="score-item">
              <span className="score-label">得分</span>
              <span className="score-value">{score}</span>
            </div>
            <div className="score-item">
              <span className="score-label">总题数</span>
              <span className="score-value">{totalPlayed}</span>
            </div>
            <div className="score-item">
              <span className="score-label">正确率</span>
              <span className="score-value">
                {totalPlayed > 0 ? Math.round((score / totalPlayed) * 100) : 0}%
              </span>
            </div>
          </div>

          <div className="game-controls">
            <button 
              onClick={playRandomNote} 
              className="btn-play"
              disabled={isPlaying}
            >
              {isPlaying ? '播放中...' : '🎵 播放音符'}
            </button>
            <button onClick={handleReset} className="btn-reset">
              重置游戏
            </button>
          </div>

          {message && (
            <div className={`game-message ${message.includes('✓') ? 'correct' : message.includes('✗') ? 'incorrect' : ''}`}>
              {message}
            </div>
          )}

          <div className="notes-grid">
            {musicGameData.map((note) => (
              <button
                key={note.id}
                onClick={() => handleNoteSelect(note)}
                className="note-button"
                disabled={!currentNote || isPlaying}
              >
                <span className="note-name">{note.name}</span>
                <span className="note-symbol">{note.note}</span>
              </button>
            ))}
          </div>

          <div className="game-instructions">
            <h3>游戏说明</h3>
            <ul>
              <li>点击"播放音符"按钮，系统会随机播放一个音符</li>
              <li>仔细聆听后，从下方选择你认为正确的音符</li>
              <li>系统会立即告诉你答案是否正确</li>
              <li>挑战自己，看看能达到多高的正确率！</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicGame








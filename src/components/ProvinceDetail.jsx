import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { provinceData } from '../data/musicData'
import './ProvinceDetail.css'

const ProvinceDetail = ({ user, onLogout }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [province, setProvince] = useState(provinceData[id] || {})
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({ ...province })

  const handleBack = () => {
    navigate('/')
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditData({ ...province })
  }

  const handleSave = () => {
    provinceData[id] = { ...editData }
    setProvince({ ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData({ ...province })
  }

  const handleChange = (field, value) => {
    setEditData({ ...editData, [field]: value })
  }

  if (!province.id) {
    return (
      <div className="province-detail-container">
        <div className="error-box">
          <h2>省份信息未找到</h2>
          <button onClick={handleBack} className="btn btn-primary">返回地图</button>
        </div>
      </div>
    )
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

      <div className="province-detail-container content">
        <button onClick={handleBack} className="back-button">← 返回地图</button>

        <div className="detail-card">
          <div className="detail-header">
            <h1>{province.name}</h1>
            <p className="song-name">代表曲目：{province.song}</p>
          </div>

          {!isEditing ? (
            <div className="detail-content">
              <section className="detail-section">
                <h2>文化概述</h2>
                <p>{province.culture}</p>
              </section>

              <section className="detail-section">
                <h2>音乐特色</h2>
                <p>{province.musicFeature}</p>
              </section>

              <div className="audio-section">
                <h2>聆听二胡演奏</h2>
                <audio controls src={province.audioFile}>
                  您的浏览器不支持音频播放
                </audio>
              </div>

              {user.role === 'admin' && (
                <button onClick={handleEdit} className="btn btn-primary edit-btn">
                  编辑内容
                </button>
              )}
            </div>
          ) : (
            <div className="edit-form">
              <div className="form-group">
                <label>代表曲目</label>
                <input
                  type="text"
                  value={editData.song}
                  onChange={(e) => handleChange('song', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>文化概述</label>
                <textarea
                  rows="4"
                  value={editData.culture}
                  onChange={(e) => handleChange('culture', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>音乐特色</label>
                <textarea
                  rows="4"
                  value={editData.musicFeature}
                  onChange={(e) => handleChange('musicFeature', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>音频文件路径</label>
                <input
                  type="text"
                  value={editData.audioFile}
                  onChange={(e) => handleChange('audioFile', e.target.value)}
                />
              </div>

              <div className="edit-actions">
                <button onClick={handleSave} className="btn btn-primary">保存</button>
                <button onClick={handleCancel} className="btn btn-secondary">取消</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProvinceDetail







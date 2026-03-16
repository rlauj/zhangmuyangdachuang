import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { newsData } from '../data/newsData'
import './News.css'

const News = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [news, setNews] = useState(newsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '艺术评论',
    author: user.username
  })

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddNews = () => {
    if (user.role !== 'admin') {
      alert('只有管理员才能添加新闻')
      return
    }
    setEditingId(null)
    setFormData({
      title: '',
      content: '',
      category: '艺术评论',
      author: user.username
    })
    setShowModal(true)
  }

  const handleEditNews = (item) => {
    if (user.role !== 'admin') {
      alert('只有管理员才能编辑新闻')
      return
    }
    setEditingId(item.id)
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category,
      author: item.author
    })
    setShowModal(true)
  }

  const handleDeleteNews = (id) => {
    if (user.role !== 'admin') {
      alert('只有管理员才能删除新闻')
      return
    }
    if (window.confirm('确定要删除这条新闻吗？')) {
      setNews(news.filter(item => item.id !== id))
    }
  }

  const handleSave = () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('标题和内容不能为空')
      return
    }

    if (editingId) {
      setNews(news.map(item =>
        item.id === editingId
          ? {
              ...item,
              title: formData.title,
              content: formData.content,
              category: formData.category,
              author: formData.author,
              date: new Date().toISOString().split('T')[0]
            }
          : item
      ))
    } else {
      const newNews = {
        id: Math.max(...news.map(n => n.id), 0) + 1,
        title: formData.title,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        date: new Date().toISOString().split('T')[0]
      }
      setNews([newNews, ...news])
    }
    setShowModal(false)
  }

  const handleCancel = () => {
    setShowModal(false)
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

      <div className="news-container content">
        <button onClick={handleBack} className="back-button">← 返回地图</button>

        <div className="news-header">
          <h1>琴韵要闻</h1>
          <p className="news-subtitle">二胡艺术与音乐文化动态</p>
        </div>

        <div className="news-controls">
          <input
            type="text"
            className="search-box"
            placeholder="搜索新闻..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {user.role === 'admin' && (
            <button onClick={handleAddNews} className="add-news-btn">
              + 发布新闻
            </button>
          )}
        </div>

        {filteredNews.length > 0 ? (
          <div className="news-list">
            {filteredNews.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-card-header">
                  <h2 className="news-card-title">{item.title}</h2>
                  <span className="news-card-category">{item.category}</span>
                </div>
                <p className="news-card-content">{item.content}</p>
                <div className="news-card-footer">
                  <div className="news-card-meta">
                    <span>📅 {item.date}</span>
                    <span>✍️ {item.author}</span>
                  </div>
                  {user.role === 'admin' && (
                    <div className="news-card-actions">
                      <button
                        onClick={() => handleEditNews(item)}
                        className="edit-btn"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="delete-btn"
                      >
                        删除
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>暂无新闻</h3>
            <p>还没有相关的新闻内容</p>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay" onClick={handleCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-header">
                {editingId ? '编辑新闻' : '发布新闻'}
              </h2>

              <div className="form-group">
                <label>标题</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="输入新闻标题"
                />
              </div>

              <div className="form-group">
                <label>分类</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option>艺术评论</option>
                  <option>赛事新闻</option>
                  <option>教育动态</option>
                  <option>国际交流</option>
                  <option>其他</option>
                </select>
              </div>

              <div className="form-group">
                <label>内容</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="输入新闻内容"
                />
              </div>

              <div className="form-group">
                <label>作者</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="输入作者名称"
                />
              </div>

              <div className="modal-actions">
                <button onClick={handleSave} className="btn-primary">
                  保存
                </button>
                <button onClick={handleCancel} className="btn-secondary">
                  取消
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default News




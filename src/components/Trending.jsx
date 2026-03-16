import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { trendingData, categories } from '../data/trendingData'
import './Trending.css'

const Trending = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [filteredNews, setFilteredNews] = useState(trendingData)

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
    if (categoryName === '全部') {
      setFilteredNews(trendingData)
    } else {
      setFilteredNews(trendingData.filter(item => item.category === categoryName))
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  const featuredNews = trendingData.filter(item => item.featured)
  const otherNews = filteredNews.filter(item => !item.featured)

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

      <div className="trending-container content">
        <button onClick={handleBack} className="back-button">← 返回地图</button>

        <div className="trending-header">
          <h1>今日头条</h1>
          <p className="trending-subtitle">二胡音乐与文化热点资讯</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="trending-content">
          <div className="featured-section">
            {featuredNews.map(news => (
              <div key={news.id} className="featured-card">
                <div className="featured-badge">🔥 热门</div>
                <div className="featured-card-header">
                  <div className="featured-icon">{news.image}</div>
                  <span className="featured-category">{news.category}</span>
                </div>
                <h2 className="featured-card-title">{news.title}</h2>
                <p className="featured-card-description">{news.description}</p>
                <div className="featured-card-stats">
                  <div className="stat-item">
                    👁️ {news.views.toLocaleString()} 浏览
                  </div>
                  <div className="stat-item">
                    ❤️ {news.likes.toLocaleString()} 点赞
                  </div>
                  <div className="stat-item">
                    💬 {news.comments} 评论
                  </div>
                  <div className="stat-item">
                    ⏰ {news.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">🔥 热榜</h3>
              <div className="trending-list">
                {trendingData.slice(0, 5).map((news, index) => (
                  <div key={news.id} className="trending-item">
                    <span className="trending-item-rank">{index + 1}</span>
                    <div>
                      <div className="trending-item-title">{news.title}</div>
                      <div className="trending-item-views">
                        {news.views.toLocaleString()} 浏览
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">📊 数据统计</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                <div>📰 总新闻数: {trendingData.length}</div>
                <div>👥 总浏览: {trendingData.reduce((sum, n) => sum + n.views, 0).toLocaleString()}</div>
                <div>❤️ 总点赞: {trendingData.reduce((sum, n) => sum + n.likes, 0).toLocaleString()}</div>
                <div>💬 总评论: {trendingData.reduce((sum, n) => sum + n.comments, 0)}</div>
              </div>
            </div>
          </div>
        </div>

        {otherNews.length > 0 && (
          <>
            <h3 style={{ 
              fontSize: '24px', 
              color: 'var(--accent-gold)', 
              marginTop: '50px', 
              marginBottom: '20px',
              letterSpacing: '2px'
            }}>
              更多资讯
            </h3>
            <div className="news-grid">
              {otherNews.map(news => (
                <div key={news.id} className="news-card-small">
                  <div className="news-card-small-icon">{news.image}</div>
                  <h3 className="news-card-small-title">{news.title}</h3>
                  <p className="news-card-small-desc">{news.description}</p>
                  <div className="news-card-small-footer">
                    <span>{news.category}</span>
                    <span>{news.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Trending



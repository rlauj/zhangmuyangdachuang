import React, { useState } from 'react'
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // 简单的登录验证
    if (username === 'admin' && password === 'admin123') {
      onLogin({ username: 'admin', role: 'admin' })
    } else if (username === 'guest' && password === 'guest123') {
      onLogin({ username: 'guest', role: 'guest' })
    } else {
      setError('用户名或密码错误')
    }
  }

  return (
    <div className="login-container">
      <div className="login-bg-pattern"></div>
      <div className="login-box fade-in">
        <div className="login-header">
          <h1>中国音乐文化地图</h1>
          <p className="subtitle">探索华夏音韵之美</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              required
            />
          </div>
          
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="btn-login">登录</button>
        </form>

        <div className="login-tips">
          <p>提示：</p>
          <p>管理员 - admin / admin123</p>
          <p>游客 - guest / guest123</p>
        </div>
      </div>
    </div>
  )
}

export default Login






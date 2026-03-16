import React from 'react'

const ChinaMapSVG = ({ onProvinceClick, onProvinceDoubleClick, currentPlaying }) => {
  const handleClick = (provinceId) => {
    onProvinceClick(provinceId)
  }

  const handleDoubleClick = (provinceId) => {
    onProvinceDoubleClick(provinceId)
  }

  return (
    <svg 
      className="china-map" 
      viewBox="0 0 1000 800" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 新疆 */}
      <path 
        className={`province ${currentPlaying === 'xinjiang' ? 'playing' : ''}`}
        d="M 50 100 L 200 80 L 280 120 L 300 200 L 250 280 L 180 300 L 100 250 Z"
        onClick={() => handleClick('xinjiang')}
        onDoubleClick={() => handleDoubleClick('xinjiang')}
      />
      <text x="170" y="200" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">新疆</text>

      {/* 西藏 */}
      <path 
        className={`province ${currentPlaying === 'xizang' ? 'playing' : ''}`}
        d="M 100 300 L 180 320 L 250 380 L 280 450 L 200 480 L 120 420 Z"
        onClick={() => handleClick('xizang')}
        onDoubleClick={() => handleDoubleClick('xizang')}
      />
      <text x="190" y="400" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">西藏</text>

      {/* 青海 */}
      <path 
        className={`province ${currentPlaying === 'qinghai' ? 'playing' : ''}`}
        d="M 250 280 L 320 260 L 360 300 L 340 360 L 280 380 Z"
        onClick={() => handleClick('qinghai')}
        onDoubleClick={() => handleDoubleClick('qinghai')}
      />
      <text x="310" y="320" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">青海</text>

      {/* 内蒙古 */}
      <path 
        className={`province ${currentPlaying === 'neimenggu' ? 'playing' : ''}`}
        d="M 320 100 L 500 90 L 620 110 L 640 150 L 600 180 L 500 170 L 400 200 L 340 180 Z"
        onClick={() => handleClick('neimenggu')}
        onDoubleClick={() => handleDoubleClick('neimenggu')}
      />
      <text x="480" y="150" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">内蒙古</text>

      {/* 黑龙江 */}
      <path 
        className={`province ${currentPlaying === 'heilongjiang' ? 'playing' : ''}`}
        d="M 700 80 L 800 70 L 850 110 L 820 150 L 750 140 L 680 120 Z"
        onClick={() => handleClick('heilongjiang')}
        onDoubleClick={() => handleDoubleClick('heilongjiang')}
      />
      <text x="760" y="110" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">黑龙江</text>

      {/* 吉林 */}
      <path 
        className={`province ${currentPlaying === 'jilin' ? 'playing' : ''}`}
        d="M 720 150 L 800 140 L 820 180 L 780 200 L 700 190 Z"
        onClick={() => handleClick('jilin')}
        onDoubleClick={() => handleDoubleClick('jilin')}
      />
      <text x="760" y="170" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">吉林</text>

      {/* 辽宁 */}
      <path 
        className={`province ${currentPlaying === 'liaoning' ? 'playing' : ''}`}
        d="M 680 190 L 760 200 L 750 240 L 680 230 Z"
        onClick={() => handleClick('liaoning')}
        onDoubleClick={() => handleDoubleClick('liaoning')}
      />
      <text x="715" y="215" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">辽宁</text>

      {/* 河北 */}
      <path 
        className={`province ${currentPlaying === 'hebei' ? 'playing' : ''}`}
        d="M 600 220 L 660 210 L 680 250 L 640 280 L 580 270 Z"
        onClick={() => handleClick('hebei')}
        onDoubleClick={() => handleDoubleClick('hebei')}
      />
      <text x="630" y="250" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">河北</text>

      {/* 北京 */}
      <circle 
        className={`province ${currentPlaying === 'beijing' ? 'playing' : ''}`}
        cx="630" cy="240" r="8"
        onClick={() => handleClick('beijing')}
        onDoubleClick={() => handleDoubleClick('beijing')}
      />
      <text x="650" y="235" fill="var(--accent-gold)" fontSize="12" textAnchor="start">北京</text>

      {/* 天津 */}
      <circle 
        className={`province ${currentPlaying === 'tianjin' ? 'playing' : ''}`}
        cx="650" cy="250" r="6"
        onClick={() => handleClick('tianjin')}
        onDoubleClick={() => handleDoubleClick('tianjin')}
      />
      <text x="660" y="255" fill="var(--accent-gold)" fontSize="12" textAnchor="start">天津</text>

      {/* 山西 */}
      <path 
        className={`province ${currentPlaying === 'shanxi' ? 'playing' : ''}`}
        d="M 540 240 L 590 230 L 600 280 L 560 300 L 520 280 Z"
        onClick={() => handleClick('shanxi')}
        onDoubleClick={() => handleDoubleClick('shanxi')}
      />
      <text x="560" y="265" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">山西</text>

      {/* 陕西 */}
      <path 
        className={`province ${currentPlaying === 'shaanxi' ? 'playing' : ''}`}
        d="M 480 280 L 540 270 L 550 330 L 500 350 L 460 320 Z"
        onClick={() => handleClick('shaanxi')}
        onDoubleClick={() => handleDoubleClick('shaanxi')}
      />
      <text x="505" y="310" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">陕西</text>

      {/* 甘肃 */}
      <path 
        className={`province ${currentPlaying === 'gansu' ? 'playing' : ''}`}
        d="M 340 240 L 460 220 L 480 280 L 420 320 L 360 300 Z"
        onClick={() => handleClick('gansu')}
        onDoubleClick={() => handleDoubleClick('gansu')}
      />
      <text x="410" y="270" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">甘肃</text>

      {/* 宁夏 */}
      <path 
        className={`province ${currentPlaying === 'ningxia' ? 'playing' : ''}`}
        d="M 460 260 L 490 250 L 500 280 L 480 290 Z"
        onClick={() => handleClick('ningxia')}
        onDoubleClick={() => handleDoubleClick('ningxia')}
      />
      <text x="475" y="270" fill="var(--accent-gold)" fontSize="12" textAnchor="middle">宁夏</text>

      {/* 山东 */}
      <path 
        className={`province ${currentPlaying === 'shandong' ? 'playing' : ''}`}
        d="M 620 280 L 700 270 L 720 310 L 680 330 L 610 320 Z"
        onClick={() => handleClick('shandong')}
        onDoubleClick={() => handleDoubleClick('shandong')}
      />
      <text x="660" y="305" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">山东</text>

      {/* 河南 */}
      <path 
        className={`province ${currentPlaying === 'henan' ? 'playing' : ''}`}
        d="M 560 320 L 620 310 L 630 360 L 580 380 L 540 360 Z"
        onClick={() => handleClick('henan')}
        onDoubleClick={() => handleDoubleClick('henan')}
      />
      <text x="585" y="345" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">河南</text>

      {/* 江苏 */}
      <path 
        className={`province ${currentPlaying === 'jiangsu' ? 'playing' : ''}`}
        d="M 640 340 L 700 330 L 720 370 L 680 390 L 630 380 Z"
        onClick={() => handleClick('jiangsu')}
        onDoubleClick={() => handleDoubleClick('jiangsu')}
      />
      <text x="670" y="360" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">江苏</text>

      {/* 上海 */}
      <circle 
        className={`province ${currentPlaying === 'shanghai' ? 'playing' : ''}`}
        cx="710" cy="370" r="6"
        onClick={() => handleClick('shanghai')}
        onDoubleClick={() => handleDoubleClick('shanghai')}
      />
      <text x="720" y="375" fill="var(--accent-gold)" fontSize="12" textAnchor="start">上海</text>

      {/* 安徽 */}
      <path 
        className={`province ${currentPlaying === 'anhui' ? 'playing' : ''}`}
        d="M 620 370 L 670 360 L 680 410 L 630 430 L 600 410 Z"
        onClick={() => handleClick('anhui')}
        onDoubleClick={() => handleDoubleClick('anhui')}
      />
      <text x="640" y="395" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">安徽</text>

      {/* 浙江 */}
      <path 
        className={`province ${currentPlaying === 'zhejiang' ? 'playing' : ''}`}
        d="M 670 400 L 720 390 L 730 440 L 690 460 L 660 440 Z"
        onClick={() => handleClick('zhejiang')}
        onDoubleClick={() => handleDoubleClick('zhejiang')}
      />
      <text x="695" y="425" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">浙江</text>

      {/* 湖北 */}
      <path 
        className={`province ${currentPlaying === 'hubei' ? 'playing' : ''}`}
        d="M 540 380 L 610 370 L 620 420 L 570 440 L 520 420 Z"
        onClick={() => handleClick('hubei')}
        onDoubleClick={() => handleDoubleClick('hubei')}
      />
      <text x="565" y="410" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">湖北</text>

      {/* 江西 */}
      <path 
        className={`province ${currentPlaying === 'jiangxi' ? 'playing' : ''}`}
        d="M 620 430 L 670 420 L 680 480 L 630 500 L 600 470 Z"
        onClick={() => handleClick('jiangxi')}
        onDoubleClick={() => handleDoubleClick('jiangxi')}
      />
      <text x="640" y="460" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">江西</text>

      {/* 福建 */}
      <path 
        className={`province ${currentPlaying === 'fujian' ? 'playing' : ''}`}
        d="M 680 470 L 720 460 L 730 520 L 690 540 L 670 510 Z"
        onClick={() => handleClick('fujian')}
        onDoubleClick={() => handleDoubleClick('fujian')}
      />
      <text x="700" y="500" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">福建</text>

      {/* 湖南 */}
      <path 
        className={`province ${currentPlaying === 'hunan' ? 'playing' : ''}`}
        d="M 540 440 L 600 430 L 610 490 L 560 510 L 520 480 Z"
        onClick={() => handleClick('hunan')}
        onDoubleClick={() => handleDoubleClick('hunan')}
      />
      <text x="565" y="470" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">湖南</text>

      {/* 广东 */}
      <path 
        className={`province ${currentPlaying === 'guangdong' ? 'playing' : ''}`}
        d="M 580 520 L 660 510 L 680 560 L 620 580 L 560 560 Z"
        onClick={() => handleClick('guangdong')}
        onDoubleClick={() => handleDoubleClick('guangdong')}
      />
      <text x="620" y="545" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">广东</text>

      {/* 香港 */}
      <circle 
        className={`province ${currentPlaying === 'xianggang' ? 'playing' : ''}`}
        cx="650" cy="570" r="5"
        onClick={() => handleClick('xianggang')}
        onDoubleClick={() => handleDoubleClick('xianggang')}
      />
      <text x="660" y="575" fill="var(--accent-gold)" fontSize="11" textAnchor="start">香港</text>

      {/* 澳门 */}
      <circle 
        className={`province ${currentPlaying === 'aomen' ? 'playing' : ''}`}
        cx="630" cy="575" r="5"
        onClick={() => handleClick('aomen')}
        onDoubleClick={() => handleDoubleClick('aomen')}
      />
      <text x="615" y="590" fill="var(--accent-gold)" fontSize="11" textAnchor="end">澳门</text>

      {/* 广西 */}
      <path 
        className={`province ${currentPlaying === 'guangxi' ? 'playing' : ''}`}
        d="M 480 520 L 560 510 L 570 560 L 520 580 L 460 560 Z"
        onClick={() => handleClick('guangxi')}
        onDoubleClick={() => handleDoubleClick('guangxi')}
      />
      <text x="515" y="545" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">广西</text>

      {/* 海南 */}
      <ellipse 
        className={`province ${currentPlaying === 'hainan' ? 'playing' : ''}`}
        cx="540" cy="620" rx="40" ry="25"
        onClick={() => handleClick('hainan')}
        onDoubleClick={() => handleDoubleClick('hainan')}
      />
      <text x="540" y="625" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">海南</text>

      {/* 贵州 */}
      <path 
        className={`province ${currentPlaying === 'guizhou' ? 'playing' : ''}`}
        d="M 440 480 L 520 470 L 530 520 L 480 540 L 420 520 Z"
        onClick={() => handleClick('guizhou')}
        onDoubleClick={() => handleDoubleClick('guizhou')}
      />
      <text x="475" y="505" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">贵州</text>

      {/* 云南 */}
      <path 
        className={`province ${currentPlaying === 'yunnan' ? 'playing' : ''}`}
        d="M 340 480 L 430 470 L 440 540 L 380 560 L 320 540 Z"
        onClick={() => handleClick('yunnan')}
        onDoubleClick={() => handleDoubleClick('yunnan')}
      />
      <text x="380" y="515" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">云南</text>

      {/* 四川 */}
      <path 
        className={`province ${currentPlaying === 'sichuan' ? 'playing' : ''}`}
        d="M 380 360 L 480 350 L 500 420 L 440 450 L 360 430 Z"
        onClick={() => handleClick('sichuan')}
        onDoubleClick={() => handleDoubleClick('sichuan')}
      />
      <text x="430" y="400" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">四川</text>

      {/* 重庆 */}
      <path 
        className={`province ${currentPlaying === 'chongqing' ? 'playing' : ''}`}
        d="M 490 410 L 520 400 L 530 430 L 510 445 Z"
        onClick={() => handleClick('chongqing')}
        onDoubleClick={() => handleDoubleClick('chongqing')}
      />
      <text x="510" y="425" fill="var(--accent-gold)" fontSize="12" textAnchor="middle">重庆</text>

      {/* 台湾 */}
      <ellipse 
        className={`province ${currentPlaying === 'taiwan' ? 'playing' : ''}`}
        cx="780" cy="500" rx="20" ry="50"
        onClick={() => handleClick('taiwan')}
        onDoubleClick={() => handleDoubleClick('taiwan')}
      />
      <text x="780" y="505" fill="var(--accent-gold)" fontSize="14" textAnchor="middle">台湾</text>
    </svg>
  )
}

export default ChinaMapSVG








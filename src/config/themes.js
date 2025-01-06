export const themes = {
  default: {
    name: '默认主题',
    gradient: 'linear-gradient(-45deg, #e0e0ff, #ffd6e7, #ffdfd0, #fff4d1, #d4ffe6, #cce9ff, #f0e6ff, #ffe6f0, #ffe6e6)',
    backgroundColor: '#ffffff',
    backgroundColorDark: '#1e1e2e',
    textColor: '#303133',
    textColorDark: '#e5e5e5',
    primaryColor: '#409EFF',
    secondaryColor: '#67C23A',
    borderColor: 'rgba(64, 158, 255, 0.2)',
    borderColorDark: 'rgba(255, 255, 255, 0.1)'
  },
  cyberpunk: {
    name: '赛博朋克',
    gradient: 'linear-gradient(-45deg, #0a0628, #100b3c, #1a0f50, #241264)',
    backgroundColor: '#0f0a2a',
    backgroundColorDark: '#080520',
    textColor: '#00ffd5',
    textColorDark: '#00fff2',
    primaryColor: '#f618f6',
    secondaryColor: '#00ffdd',
    borderColor: 'rgba(246, 24, 246, 0.3)',
    borderColorDark: 'rgba(0, 255, 221, 0.3)',
    neonShadow: '0 0 10px rgba(246, 24, 246, 0.4), 0 0 20px rgba(0, 255, 221, 0.3)',
    textShadow: '0 0 8px rgba(0, 255, 213, 0.5)',
    glowEffect: true,
    glowColor: 'rgba(0, 255, 221, 0.15)'
  },
  sakura: {
    name: '樱花',
    gradient: 'linear-gradient(-45deg, #ffd1dc, #ffe6e6, #ffb7c5, #fff0f5)',
    backgroundColor: '#fff0f5',
    backgroundColorDark: '#2a1f2d',
    textColor: '#d4317c',
    textColorDark: '#ffd1dc',
    primaryColor: '#ff69b4',
    secondaryColor: '#ffb7c5',
    borderColor: 'rgba(255, 105, 180, 0.2)',
    borderColorDark: 'rgba(255, 209, 220, 0.2)'
  },
  ocean: {
    name: '深海',
    gradient: 'linear-gradient(-45deg, #001e3c, #003366, #004080, #0059b3)',
    backgroundColor: '#001e3c',
    backgroundColorDark: '#001428',
    textColor: '#e6f7ff',
    textColorDark: '#b3e0ff',
    primaryColor: '#00a0e9',
    secondaryColor: '#00ffff',
    borderColor: 'rgba(0, 160, 233, 0.2)',
    borderColorDark: 'rgba(0, 255, 255, 0.2)'
  },
  forest: {
    name: '森林',
    gradient: 'linear-gradient(-45deg, #2d5a27, #3e8e41, #4caf50, #8bc34a)',
    backgroundColor: '#2d5a27',
    backgroundColorDark: '#1a331a',
    textColor: '#e6ffe6',
    textColorDark: '#ccffcc',
    primaryColor: '#4caf50',
    secondaryColor: '#8bc34a',
    borderColor: 'rgba(76, 175, 80, 0.2)',
    borderColorDark: 'rgba(139, 195, 74, 0.2)'
  }
}

export const getThemeVariables = (themeName) => {
  const theme = themes[themeName] || themes.default
  return {
    '--theme-gradient': theme.gradient,
    '--theme-bg': theme.backgroundColor,
    '--theme-bg-dark': theme.backgroundColorDark,
    '--theme-text': theme.textColor,
    '--theme-text-dark': theme.textColorDark,
    '--theme-primary': theme.primaryColor,
    '--theme-secondary': theme.secondaryColor,
    '--theme-border': theme.borderColor,
    '--theme-border-dark': theme.borderColorDark,
    '--theme-neon-shadow': theme.neonShadow || 'none',
    '--theme-text-shadow': theme.textShadow || 'none',
    '--theme-font-family': theme.fontFamily || 'Avenir, Helvetica, Arial, sans-serif',
    '--theme-font-weight': theme.fontWeight || '400',
    '--theme-letter-spacing': theme.letterSpacing || 'normal'
  }
} 
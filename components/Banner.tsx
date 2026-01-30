'use client'

interface BannerConfig {
  show: boolean
  title?: string
  description?: string
  backgroundImage?: string
  textColor?: string
}

const Banner = () => {
  const bannerConfig: BannerConfig = {
    show: true,
    title: "Welcome to John Li's Personal Space",
    description:
      'PhD Candidate in Finance | Researching Carbon Markets & Sustainable Finance | Sharing insights on climate economics',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop")',
    textColor: 'text-white',
  }

  if (!bannerConfig.show) return null

  return (
    <div
      className={`relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8 ${bannerConfig.textColor}`}
      style={{
        backgroundImage: bannerConfig.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1b5e20',
      }}
    >
      {/* 深色遮罩，让文字更清晰 */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 内容区域 */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold drop-shadow-lg sm:text-5xl">{bannerConfig.title}</h1>
        <p className="text-lg opacity-95 drop-shadow-md sm:text-xl">{bannerConfig.description}</p>
      </div>
    </div>
  )
}

export default Banner

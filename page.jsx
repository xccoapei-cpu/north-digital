import { ArrowRight, CheckCircle2, LineChart, MessageCircle, Target, Settings, BadgeCheck, AlertTriangle } from "lucide-react";

export default function Home() {
  const lineUrl = "https://lin.ee/ohGIVV0";

  const services = [
    ["Meta 廣告優化", "不是只幫你投廣告，而是檢查素材、文案、受眾、CTA 與導流路徑。", <Target className="w-6 h-6" />],
    ["LINE 官方轉單流程", "建立歡迎訊息、選單、關鍵字回覆與導購路線，讓客人進來知道下一步。", <MessageCircle className="w-6 h-6" />],
    ["廣告健檢與調整", "協助找出目前廣告卡在哪裡，先判斷問題，再決定要不要加預算。", <LineChart className="w-6 h-6" />],
  ];

  const pains = [
    "廣告有花錢，但私訊很少",
    "客人有點進來，但最後沒有成交",
    "LINE 官方只有放資訊，沒有導購流程",
    "不知道問題出在素材、受眾還是轉單路徑",
  ];

  const steps = ["了解目前狀況", "檢查廣告與 LINE 流程", "提出可執行調整方向", "協助優化並追蹤成效"];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.2),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-sm text-blue-100 mb-6">
              <BadgeCheck className="w-4 h-4" />
              向北數位媒體整合
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              讓廣告不只曝光，<br />而是幫你帶進詢問與成交機會。
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              我們協助店家優化 Meta 廣告、LINE 官方帳號與轉單流程，讓客人從看到廣告、加入 LINE、詢問到下單，每一步都更順。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={lineUrl} className="h-12 px-6 rounded-2xl text-base bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25 inline-flex items-center justify-center font-semibold">
                免費檢視廣告問題 <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#service" className="h-12 px-6 rounded-2xl text-base border border-white/20 bg-white/5 text-white hover:bg-white/10 inline-flex items-center justify-center font-semibold">
                查看服務內容
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">適合：在地店家、課程招生、電商、服務型商家、設計/統包產業</p>
          </div>

          <div className="rounded-[2rem] bg-white/10 border border-white/10 shadow-2xl backdrop-blur p-6 md:p-8">
            <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">多數商家卡住的點</p>
                  <h2 className="text-xl font-bold">不是沒流量，是沒有轉單流程</h2>
                </div>
              </div>
              <div className="space-y-3">
                {pains.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-300 mt-0.5 shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-300 font-medium">我們主要解決什麼</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">把廣告、LINE、成交流程串起來</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">不是只做漂亮網站，而是幫你把客戶從看到廣告到願意詢問的路徑整理出來。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map(([title, text, icon]) => (
            <div key={title} className="rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition p-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-200 mb-5">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-medium">適合找我們的店家</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">你不需要懂廣告，先知道問題卡在哪裡就好。</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              很多店家不是產品不好，而是廣告進來後，客人沒有被清楚引導。向北會從廣告素材、文案、受眾、LINE 官方與成交路徑一起檢查，幫你整理出下一步該怎麼做。
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 shadow-xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-7 h-7 text-blue-600" />
              <h3 className="text-2xl font-bold">執行流程</h3>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">{index + 1}</div>
                  <div className="pt-1">
                    <p className="font-bold">{step}</p>
                    <p className="text-sm text-slate-500 mt-1">確認問題後再規劃，不盲目加預算。</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="rounded-[2rem] bg-blue-500 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-2xl shadow-blue-500/20">
          <div>
            <p className="text-blue-950 font-semibold">免費初步健檢</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">先讓我們幫你看，廣告問題可能卡在哪。</h2>
            <p className="mt-4 text-blue-50 leading-relaxed">
              傳目前廣告截圖、粉專或 LINE 官方狀況，我們會先幫你抓出最明顯的問題，適合再進一步合作。
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 text-slate-950">
            <h3 className="text-xl font-bold mb-4">加入 LINE 諮詢</h3>
            <p className="text-slate-600 mb-5">請傳：「我要健檢廣告」＋目前遇到的問題。</p>
            <a href={lineUrl} className="w-full h-12 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white inline-flex items-center justify-center font-semibold">
              點我加入 LINE 官方 <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="text-xs text-slate-400 mt-4">LINE 連結已先放 xccoa14，可之後再改成你的 LINE 官方連結。</p>
          </div>
        </div>
      </section>
    </main>
  );
}

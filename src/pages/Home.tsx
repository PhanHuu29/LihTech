import { useState, type CSSProperties, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BUSINESS_PACKAGES, DEVICES, FAQS, PRICING, PROCESS, SERVICES, URGENCY } from '../lib/data'
import { Img } from '../components/Img'
import { Icon } from '../components/Icon'
import { CONFIG } from '../config'
import { usePreferences } from '../lib/preferences'
import { ReviewsPreview } from '../components/Reviews'

const AUDIENCES = [
  { icon: 'spark' as const, title: 'Cá nhân & sinh viên', titleEn: 'Individuals & students', desc: 'Thiết lập máy học tập, công việc và phần mềm chuyên môn đúng nhu cầu.', descEn: 'Set up study, work and specialist software for your actual needs.', cta: 'Đặt hỗ trợ cá nhân', ctaEn: 'Book personal support', service: 'install' },
  { icon: 'shield' as const, title: 'Văn phòng nhỏ', titleEn: 'Small offices', desc: 'Chuẩn hoá Office, driver, máy in, tài khoản và thiết bị để đội ngũ làm việc liền mạch.', descEn: 'Standardise Office, drivers, printers, accounts and devices so your team can work smoothly.', cta: 'Đặt hỗ trợ văn phòng', ctaEn: 'Book office support', service: 'it' },
  { icon: 'calendar' as const, title: 'Doanh nghiệp', titleEn: 'Businesses', desc: 'Triển khai phần mềm, tư vấn bản quyền và xây dựng đầu mối IT Support linh hoạt.', descEn: 'Deploy software, plan licensing and establish a flexible IT support point of contact.', cta: 'Tư vấn doanh nghiệp', ctaEn: 'Business consultation', service: 'business' },
] as const

const TRUST = [
  ['Báo giá trước khi làm', 'Quote before work starts'],
  ['License & phí kỹ thuật tách riêng', 'Licences and service fees separated'],
  ['Không yêu cầu mật khẩu chính', 'No request for your main password'],
] as const

function QuickBook() {
  const nav = useNavigate()
  const { tr } = usePreferences()
  const [f, setF] = useState({ device: '', service: '', detail: '', urgency: 'today' })
  const change = (key: keyof typeof f) => (event: { target: { value: string } }) => setF({ ...f, [key]: event.target.value })
  const go = (event: FormEvent) => {
    event.preventDefault()
    try {
      const previous = JSON.parse(sessionStorage.getItem('lihtech.draft') || '{}')
      sessionStorage.setItem('lihtech.draft', JSON.stringify({ ...previous, ...f }))
    } catch { /* Booking remains usable without browser storage. */ }
    nav(f.service ? `/booking?service=${f.service}` : '/booking')
  }
  return <form className="quick-book glass liquid-surface reveal" onSubmit={go} id="quick-book">
    <div className="quick-book-head">
      <div><span className="eyebrow">{tr('BẮT ĐẦU TRONG 1 PHÚT', 'START IN 1 MINUTE')}</span><h2>{tr('Để LihTech hiểu đúng nhu cầu của bạn.', 'Help LihTech understand what you need.')}</h2><p className="muted">{tr('Chọn nhanh dịch vụ và thiết bị. Các thông tin còn lại sẽ hoàn tất trong form đặt lịch.', 'Choose your service and device. You can complete the rest in the booking form.')}</p></div>
      <span className="quick-book-badge"><Icon name="shield" />{tr('Bảo mật thông tin', 'Privacy-first')}</span>
    </div>
    <div className="quick-book-grid">
      <label>{tr('Thiết bị cần hỗ trợ', 'Device')}<select value={f.device} onChange={change('device')}><option value="">{tr('Chọn thiết bị', 'Select a device')}</option>{DEVICES.map((device) => <option key={device}>{device}</option>)}</select></label>
      <label>{tr('Dịch vụ cần hỗ trợ', 'Service')}<select value={f.service} onChange={change('service')}><option value="">{tr('Chọn dịch vụ', 'Select a service')}</option>{SERVICES.map((service) => <option key={service.id} value={service.id}>{tr(service.title, service.titleEn)}</option>)}</select></label>
      <label className="quick-book-detail">{tr('Vấn đề của bạn', 'Your issue')}<textarea rows={3} value={f.detail} onChange={change('detail')} placeholder={tr('VD: Office báo lỗi kích hoạt / Máy không nhận máy in…', 'e.g. Office activation issue / Printer not detected…')} /></label>
      <div className="quick-book-side">
        <label>{tr('Thời gian mong muốn', 'When do you need help?')}<select value={f.urgency} onChange={change('urgency')}>{Object.entries(URGENCY).map(([key, labels]) => <option key={key} value={key}>{tr(labels[0], labels[1])}</option>)}</select></label>
        <button className="btn btn-lg" type="submit"><Icon name="calendar" />{tr('Tiếp tục đặt lịch', 'Continue to booking')}<Icon name="arrow" /></button>
        <small>{tr('Không cần tạo tài khoản · LihTech xác nhận chi phí trước khi thực hiện', 'No account needed · LihTech confirms cost before work begins')}</small>
      </div>
    </div>
  </form>
}

export default function Home() {
  const nav = useNavigate()
  const { tr } = usePreferences()
  return <>
    <section className="hero-landing">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <span className="chip glass"><span className="live-dot" /><Icon name="shield" />{tr('Phần mềm hợp pháp · Hỗ trợ từ xa', 'Legitimate software · Remote support')}</span>
          <div className="brand-signature" aria-label={`${CONFIG.brand} ${CONFIG.byline}`}>
            <strong>{CONFIG.brand}</strong><span>{CONFIG.byline}</span>
          </div>
          <h1>{tr('Cài đặt chuẩn.', 'Set up right.')}<br /><span className="grad">{tr('Vận hành yên tâm.', 'Work with confidence.')}</span></h1>
          <p className="lead">{tr('LihTech hỗ trợ cài đặt, cấu hình và xử lý lỗi phần mềm cho cá nhân, văn phòng và doanh nghiệp — nhanh gọn, minh bạch và tôn trọng dữ liệu của bạn.', 'LihTech handles software setup, configuration and troubleshooting for people, offices and small businesses — clearly, efficiently and with respect for your data.')}</p>
          <div className="row hero-actions">
            <Link to="/booking" className="btn btn-lg booking-cta"><Icon name="calendar" />{tr('Đặt hỗ trợ ngay', 'Book support now')}<Icon name="arrow" /></Link>
            <Link to="/pricing" className="btn btn-ghost">{tr('Xem bảng giá', 'View pricing')}</Link>
          </div>
          <ul className="hero-proof">{TRUST.map(([vi, en]) => <li key={vi}><Icon name="check" />{tr(vi, en)}</li>)}</ul>
        </div>
        <div className="hero-brand-card glass liquid-surface" aria-label={tr('Nhận diện thương hiệu LihTech', 'LihTech brand identity')}>
          <div className="hero-card-top"><span>{tr('LIHTECH REMOTE DESK', 'LIHTECH REMOTE DESK')}</span><span className="hero-online"><i />{tr('Sẵn sàng hỗ trợ', 'Support ready')}</span></div>
          <div className="hero-mark-orbit"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><Img k="logoSquare" className="hero-mark" alt="LihTech by LihLabs" /></div>
          <div className="hero-wordmark" aria-hidden="true"><strong>{CONFIG.brand}</strong><span>{CONFIG.byline}</span></div>
          <div className="hero-card-grid">
            <div><small>{tr('TRỌNG TÂM', 'FOCUS')}</small><b>{tr('Windows · Office · IT', 'Windows · Office · IT')}</b></div>
            <div><small>{tr('HÌNH THỨC', 'FORMAT')}</small><b>{tr('Từ xa · Có lịch hẹn', 'Remote · Scheduled')}</b></div>
          </div>
          <div className="hero-contact-row">
            {CONFIG.social.zalo && <a href={CONFIG.social.zalo} target="_blank" rel="noopener noreferrer"><Img k="socialZalo" /><span><small>ZALO</small><b>{tr('Trao đổi nhanh', 'Quick chat')}</b></span><Icon name="external" /></a>}
            {CONFIG.hotline && <a href={`tel:${CONFIG.hotline.replace(/[^\d+]/g, '')}`}><span className="hero-contact-icon"><Icon name="phone" /></span><span><small>HOTLINE</small><b>{CONFIG.hotline}</b></span></a>}
          </div>
        </div>
      </div>
    </section>

    <div className="trust-rail"><div className="wrap">{TRUST.map(([vi, en]) => <span key={vi}><Icon name="check" />{tr(vi, en)}</span>)}</div></div>

    <section id="services" className="service-section">
      <div className="wrap">
        <div className="section-head reveal"><span className="eyebrow">{tr('DỊCH VỤ CỐT LÕI', 'CORE SERVICES')}</span><h2>{tr('Đúng nhu cầu. Đúng phạm vi. Đúng cách làm.', 'Right need. Right scope. Right approach.')}</h2><p className="muted">{tr('Tập trung vào phần mềm, hiệu suất thiết bị và quy trình hỗ trợ dễ theo dõi.', 'Focused on software, device performance and an easy-to-follow support process.')}</p></div>
        <div className="grid4">{SERVICES.map((service, index) => <button type="button" key={service.id} className="svc2 glass liquid-surface reveal" style={{ '--i': index } as CSSProperties} onClick={() => nav(`/booking?service=${service.id}`)}>
          <Img k={service.img} className="svc-img" /><b>{tr(service.title, service.titleEn)}</b><span>{tr(service.desc, service.descEn)}</span><i aria-hidden="true"><Icon name="arrow" /></i><em className="sr">{tr('Chọn dịch vụ', 'Select service')}</em>
        </button>)}</div>
        <QuickBook />
      </div>
    </section>

    <section className="audience-section">
      <div className="wrap">
        <div className="section-head reveal"><span className="eyebrow">{tr('THEO QUY MÔ CỦA BẠN', 'BUILT AROUND YOUR SCALE')}</span><h2>{tr('Một trải nghiệm gọn cho từng kiểu khách hàng.', 'A focused experience for every customer type.')}</h2></div>
        <div className="audience-grid">{AUDIENCES.map((audience, index) => <article className="audience-card glass liquid-surface reveal" style={{ '--i': index } as CSSProperties} key={audience.title}>
          <span className="audience-icon"><Icon name={audience.icon} /></span><h3>{tr(audience.title, audience.titleEn)}</h3><p>{tr(audience.desc, audience.descEn)}</p><Link to={`/booking?service=${audience.service}`}>{tr(audience.cta, audience.ctaEn)}<Icon name="arrow" /></Link>
        </article>)}</div>
      </div>
    </section>

    <section className="pricing-preview-section">
      <div className="wrap">
        <div className="price-preview-head reveal"><div><span className="eyebrow">{tr('BẢNG GIÁ THAM KHẢO', 'GUIDE PRICING')}</span><h2>{tr('Bạn biết khoảng chi phí trước khi đặt lịch.', 'Know the price range before you book.')}</h2><p className="muted">{tr('Chi phí được xác nhận lại theo tình trạng máy và yêu cầu thực tế. License luôn được báo riêng.', 'Cost is confirmed against your device and real requirements. Licences are always quoted separately.')}</p></div><Link to="/pricing" className="btn btn-ghost">{tr('Xem chi tiết', 'See full pricing')}<Icon name="arrow" /></Link></div>
        <div className="price-preview-grid">{PRICING.map((item, index) => <article key={item.id} className={'price-preview-card glass liquid-surface reveal' + (index === 0 ? ' featured' : '')} style={{ '--i': index } as CSSProperties}><span>{tr(item.title, item.titleEn)}</span><b>{tr(item.price, item.priceEn)}</b><p>{tr(item.desc, item.descEn)}</p></article>)}</div>
      </div>
    </section>

    <section id="process" className="process-section">
      <div className="wrap">
        <div className="section-head reveal"><span className="eyebrow">{tr('QUY TRÌNH MINH BẠCH', 'A CLEAR PROCESS')}</span><h2>{tr('Không cần nhắn tin qua lại quá nhiều.', 'Less back-and-forth messaging.')}</h2><p className="muted">{tr('Form đặt lịch giúp LihTech nắm đúng thông tin ngay từ đầu, để bạn tiết kiệm thời gian.', 'The booking form gives LihTech the right context first, saving you time.')}</p></div>
        <div className="process-grid">{PROCESS.map((item, index) => <article key={item.step} className="process-card liquid-surface reveal" style={{ '--i': index } as CSSProperties}><span>{item.step}</span><div><h3>{tr(item.title, item.titleEn)}</h3><p>{tr(item.desc, item.descEn)}</p></div></article>)}</div>
      </div>
    </section>

    <section id="business" className="business-section">
      <div className="wrap">
        <div className="business-lead glass liquid-surface reveal"><div><span className="eyebrow">{tr('LIHTECH FOR BUSINESS', 'LIHTECH FOR BUSINESS')}</span><h2>{tr('IT Support linh hoạt cho doanh nghiệp nhỏ.', 'Flexible IT support for small teams.')}</h2><p>{tr('Không cần một phòng IT cồng kềnh để bắt đầu. LihTech đồng hành từ triển khai phần mềm, chuẩn hoá thiết bị đến hỗ trợ định kỳ theo nhu cầu.', 'You do not need a full internal IT department to get started. LihTech supports software rollout, device standardisation and recurring help as you need it.')}</p><ul><li><Icon name="check" />{tr('Khảo sát nhu cầu trước khi báo giá', 'Needs review before quotation')}</li><li><Icon name="check" />{tr('Phân tách rõ phí dịch vụ và phí license', 'Clear separation of service and licence fees')}</li><li><Icon name="check" />{tr('Có bàn giao, checklist và đầu mối hỗ trợ', 'Handover, checklists and a support point of contact')}</li></ul></div><Link to="/booking?service=business" className="btn btn-lg"><Icon name="calendar" />{tr('Đặt tư vấn doanh nghiệp', 'Book a business consultation')}<Icon name="arrow" /></Link></div>
        <div className="business-package-grid">{BUSINESS_PACKAGES.map((item, index) => <article key={item.id} className="business-package glass liquid-surface reveal" style={{ '--i': index } as CSSProperties}><h3>{tr(item.title, item.titleEn)}</h3><b>{tr(item.price, item.priceEn)}</b><p>{tr(item.desc, item.descEn)}</p><ul>{item.items.map((line, lineIndex) => <li key={line}><Icon name="check" />{tr(line, item.itemsEn[lineIndex])}</li>)}</ul><Link to="/booking?service=business">{tr('Nhận tư vấn', 'Get advice')}<Icon name="arrow" /></Link></article>)}</div>
      </div>
    </section>

    <section className="policy-section">
      <div className="wrap policy-grid">
        <article className="glass liquid-surface reveal"><Icon name="shield" /><h3>{tr('Ưu tiên bản quyền hợp pháp', 'Legitimate licences first')}</h3><p>{tr('Chỉ hỗ trợ phần mềm và license có nguồn gốc hợp pháp; không dùng thông điệp “Microsoft 365 vĩnh viễn”.', 'We only support legitimately sourced software and licences; Microsoft 365 is never presented as perpetual.')}</p></article>
        <article className="glass liquid-surface reveal" style={{ '--i': 1 } as CSSProperties}><Icon name="phone" /><h3>{tr('Tôn trọng quyền riêng tư', 'Privacy-respecting support')}</h3><p>{tr('Không yêu cầu mật khẩu chính, không can thiệp tài khoản hoặc vượt qua lớp bảo mật của khách hàng.', 'We do not request main passwords, access accounts or bypass a customer’s security controls.')}</p></article>
        <article className="glass liquid-surface reveal" style={{ '--i': 2 } as CSSProperties}><Icon name="check" /><h3>{tr('Làm rõ trước khi làm', 'Clarify before action')}</h3><p>{tr('Phạm vi, thời gian và chi phí được trao đổi rõ ràng trước khi kỹ thuật viên bắt đầu hỗ trợ.', 'Scope, timing and cost are made clear before the technician starts support.')}</p></article>
      </div>
    </section>

    <section className="faq-section">
      <div className="wrap narrow"><div className="section-head reveal"><span className="eyebrow">FAQ</span><h2>{tr('Một vài điều bạn có thể đang thắc mắc.', 'A few things you may be wondering.')}</h2></div><div className="faq-list">{FAQS.map((item, index) => <details key={item.q} className="faq-item glass liquid-surface reveal" style={{ '--i': index } as CSSProperties}><summary>{tr(item.q, item.qEn)}<Icon name="arrow" /></summary><p>{tr(item.a, item.aEn)}</p></details>)}</div></div>
    </section>

    <ReviewsPreview />

    <section className="cta-section"><div className="wrap"><div className="cta-card glass liquid-surface reveal"><div><span className="eyebrow">{tr('SẴN SÀNG BẮT ĐẦU?', 'READY TO START?')}</span><h2>{tr('Mô tả vấn đề của bạn, phần còn lại để LihTech cùng xử lý.', 'Tell us what is wrong. LihTech will help with the rest.')}</h2><p>{tr('Đặt lịch trực tuyến trong vài bước hoặc liên hệ Zalo để trao đổi nhanh.', 'Book online in a few steps or message us on Zalo for a quick conversation.')}</p></div><div className="row"><Link to="/booking" className="btn btn-lg"><Icon name="calendar" />{tr('Đặt hỗ trợ', 'Book support')}<Icon name="arrow" /></Link>{CONFIG.social.zalo && <a className="btn btn-ghost" href={CONFIG.social.zalo} target="_blank" rel="noopener noreferrer"><Img k="socialZalo" className="inline-icon" />Zalo</a>}</div></div></div></section>
  </>
}

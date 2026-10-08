import { Link } from 'react-router-dom'
import { BUSINESS_PACKAGES, PRICING } from '../lib/data'
import { usePreferences } from '../lib/preferences'
import { Icon } from '../components/Icon'

const PRINCIPLES = [
  ['Báo giá trước khi thực hiện', 'Quoted before work begins'],
  ['License và phí kỹ thuật được tách riêng', 'Licence and technical fees are separate'],
  ['Yêu cầu phát sinh chỉ làm khi được xác nhận', 'Additional work only starts after confirmation'],
] as const

export default function Pricing() {
  const { tr } = usePreferences()
  return <section className="wrap page pricing-page">
    <div className="pricing-hero">
      <div><span className="eyebrow">{tr('BẢNG GIÁ LIHTECH', 'LIHTECH PRICING')}</span><h1>{tr('Dễ hiểu trước khi đặt. Rõ ràng trước khi làm.', 'Easy to understand before booking. Clear before work starts.')}</h1><p className="muted">{tr('Các mức dưới đây là giá tham khảo cho phần kỹ thuật. LihTech sẽ xem phạm vi thực tế và xác nhận lại chi phí trước khi hỗ trợ.', 'These are guide prices for technical work. LihTech reviews the real scope and confirms the cost before support begins.')}</p></div>
      <div className="pricing-side-note glass liquid-surface"><Icon name="shield" /><div><b>{tr('Bản quyền minh bạch', 'Licence transparency')}</b><p>{tr('Office, Microsoft 365 và phần mềm chuyên dụng chỉ được tư vấn hoặc triển khai với nguồn license hợp pháp.', 'Office, Microsoft 365 and specialist software are only advised or deployed with legitimate licence sources.')}</p></div></div>
    </div>

    <div className="price-grid-full">{PRICING.map((item) => <article className="price-card-full glass liquid-surface" key={item.id}>
      <div><span>{tr(item.title, item.titleEn)}</span><b>{tr(item.price, item.priceEn)}</b></div><p>{tr(item.desc, item.descEn)}</p><Link to={item.id === 'creative' ? '/booking?service=it' : item.id === 'remote' ? '/booking?service=trouble' : '/booking?service=install'}>{tr('Đặt hỗ trợ', 'Book support')}<Icon name="arrow" /></Link>
    </article>)}</div>

    <div className="price-disclaimer"><Icon name="check" /><p>{tr('Giá cuối cùng phụ thuộc vào tình trạng thiết bị, phiên bản phần mềm và phạm vi yêu cầu. Phí license, phần cứng, tài khoản thuê bao hoặc công việc phát sinh không nằm trong giá kỹ thuật nếu chưa được ghi rõ.', 'The final price depends on device condition, software version and scope. Licence, hardware, subscription-account or additional-work fees are not included unless specifically stated.')}</p></div>

    <section id="business" className="business-pricing">
      <div className="section-head"><span className="eyebrow">{tr('DÀNH CHO VĂN PHÒNG & DOANH NGHIỆP', 'FOR OFFICES & BUSINESSES')}</span><h2>{tr('Bắt đầu từ một gói phù hợp, không cần mua thừa.', 'Start with the package that fits. No unnecessary scope.')}</h2><p className="muted">{tr('Gói doanh nghiệp là điểm khởi đầu để trao đổi. LihTech khảo sát số thiết bị, phần mềm và cách làm việc trước khi chốt phương án.', 'Business packages are conversation starters. LihTech reviews devices, software and workflows before finalising a solution.')}</p></div>
      <div className="business-price-grid">{BUSINESS_PACKAGES.map((item) => <article className="business-price-card glass liquid-surface" key={item.id}><div><h3>{tr(item.title, item.titleEn)}</h3><b>{tr(item.price, item.priceEn)}</b></div><p>{tr(item.desc, item.descEn)}</p><ul>{item.items.map((line, index) => <li key={line}><Icon name="check" />{tr(line, item.itemsEn[index])}</li>)}</ul><Link className="btn btn-ghost" to="/booking?service=business"><Icon name="calendar" />{tr('Đặt tư vấn', 'Book consultation')}</Link></article>)}</div>
    </section>

    <section className="pricing-principles glass liquid-surface"><div><span className="eyebrow">{tr('NGUYÊN TẮC BÁO GIÁ', 'QUOTING PRINCIPLES')}</span><h2>{tr('Một mức giá dễ kiểm tra, không mập mờ.', 'Pricing that is easy to verify.')}</h2></div><ul>{PRINCIPLES.map(([vi, en]) => <li key={vi}><Icon name="check" />{tr(vi, en)}</li>)}</ul></section>

    <div className="pricing-action"><Link to="/booking" className="btn btn-lg"><Icon name="calendar" />{tr('Đặt hỗ trợ và nhận xác nhận', 'Book support and get confirmation')}<Icon name="arrow" /></Link></div>
  </section>
}

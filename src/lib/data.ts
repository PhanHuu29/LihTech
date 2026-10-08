import type { ImageKey } from './images'
export const SERVICES: readonly { id: string; img: ImageKey; title: string; titleEn: string; desc: string; descEn: string }[] = [
  { id: 'install', img: 'iconInstall', title: 'Windows & Office', titleEn: 'Windows & Office', desc: 'Cài Windows, Office, driver, máy in và font cho công việc hằng ngày', descEn: 'Windows, Office, drivers, printers and fonts for everyday work' },
  { id: 'trouble', img: 'iconFix', title: 'Khắc phục lỗi phần mềm', titleEn: 'Software troubleshooting', desc: 'Lỗi Office, cập nhật, ứng dụng không mở, máy chậm hoặc xung đột phần mềm', descEn: 'Office, update, launch, performance and software-conflict issues' },
  { id: 'it', img: 'iconIt', title: 'Phần mềm chuyên môn', titleEn: 'Creative & specialist software', desc: 'Thiết kế, dựng video, học tập và các công cụ phục vụ công việc', descEn: 'Design, video, study and professional work tools' },
  { id: 'business', img: 'iconBusiness', title: 'IT Support doanh nghiệp', titleEn: 'Business IT support', desc: 'Triển khai, chuẩn hoá và hỗ trợ định kỳ cho đội ngũ nhỏ', descEn: 'Deployment, standardisation and recurring help for small teams' },
]
export const DEVICES = ['Windows', 'macOS', 'Khác'] as const
export const OS_VERSIONS: Record<string, string[]> = {
  Windows: ['Windows 11', 'Windows 10', 'Khác'],
  macOS: ['macOS Sequoia', 'macOS Sonoma', 'macOS Ventura', 'Khác'],
  Khác: ['Chưa rõ / cần tư vấn', 'Khác'],
}
export const IPHONE_ISSUES = [
  ['Cập nhật', 'Software update'], ['Lỗi ứng dụng', 'App issue'], ['Khôi phục thiết bị', 'Device restore'],
] as const
export const SLOTS = ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '19:00 - 20:00']
export const URGENCY = { '30m': ['Trong 30 phút', 'Within 30 minutes'], today: ['Trong hôm nay', 'Today'], schedule: ['Chọn giờ hẹn', 'Schedule a time'] } as const
export type UrgencyId = keyof typeof URGENCY
export const METHODS = { remote: ['Hỗ trợ từ xa', 'Remote support'], onsite: ['Hỗ trợ tại chỗ', 'On-site support'] } as const
export const STATUSES = [
  { id: 'received', label: 'Đã lưu yêu cầu', labelEn: 'Request saved', msg: 'Yêu cầu đã được lưu trên thiết bị này. LihTech sẽ xác nhận lịch qua Zalo hoặc điện thoại.', msgEn: 'Your request is saved on this device. LihTech will confirm the appointment via Zalo or phone.' },
  { id: 'review', label: 'Đang xem xét', labelEn: 'Under review', msg: 'Đang xem xét sự cố để báo giá', msgEn: 'We are reviewing your issue to prepare a quote.' },
  { id: 'scheduled', label: 'Đã lên lịch', labelEn: 'Scheduled', msg: 'Lịch hỗ trợ của bạn đã được xác nhận', msgEn: 'Your support appointment has been confirmed.' },
  { id: 'progress', label: 'Đang xử lý', labelEn: 'In progress', msg: 'Kỹ thuật viên đang xử lý yêu cầu của bạn', msgEn: 'A technician is working on your request.' },
  { id: 'done', label: 'Hoàn tất', labelEn: 'Completed', msg: 'Dịch vụ hỗ trợ đã hoàn tất', msgEn: 'Your support service has been completed.' },
] as const
export type StatusId = (typeof STATUSES)[number]['id']
export const PRICING = [
  { id: 'remote', title: 'Xử lý lỗi từ xa', titleEn: 'Remote troubleshooting', price: 'Từ 50.000đ', priceEn: 'From 50,000 VND', desc: 'Kiểm tra, xử lý lỗi ứng dụng và hướng dẫn sử dụng.', descEn: 'App diagnosis, issue fixing and guided handover.' },
  { id: 'office', title: 'Office · Driver · Máy in · Font', titleEn: 'Office · Drivers · Printers · Fonts', price: '50.000đ – 120.000đ', priceEn: '50,000–120,000 VND', desc: 'Thiết lập công cụ thiết yếu cho học tập và công việc.', descEn: 'Essential setup for study and everyday work.' },
  { id: 'windows', title: 'Windows + Driver', titleEn: 'Windows + Drivers', price: '150.000đ – 250.000đ', priceEn: '150,000–250,000 VND', desc: 'Cài đặt sạch, cập nhật và cấu hình cơ bản.', descEn: 'Clean installation, updates and core configuration.' },
  { id: 'microsoft', title: 'Thiết lập Microsoft 365 / Office', titleEn: 'Microsoft 365 / Office setup', price: '80.000đ – 150.000đ', priceEn: '80,000–150,000 VND', desc: 'Cài đặt, cấu hình và bàn giao trên thiết bị của bạn.', descEn: 'Setup, configuration and handover on your device.' },
  { id: 'creative', title: 'Thiết kế & dựng video', titleEn: 'Design & video editing', price: '80.000đ – 250.000đ', priceEn: '80,000–250,000 VND', desc: 'Cài đặt và cấu hình phần mềm phục vụ chuyên môn.', descEn: 'Installation and configuration for creative work.' },
  { id: 'bundle', title: 'Combo học tập · công việc', titleEn: 'Study · work bundle', price: '200.000đ – 350.000đ', priceEn: '200,000–350,000 VND', desc: 'Gói thiết lập theo nhu cầu sử dụng thực tế.', descEn: 'A tailored setup bundle for real workflows.' },
] as const

export const BUSINESS_PACKAGES = [
  { id: 'office-start', title: 'Office Start', titleEn: 'Office Start', price: 'Từ 1.200.000đ', priceEn: 'From 1,200,000 VND', desc: 'Rà soát và thiết lập nền tảng phần mềm cho văn phòng nhỏ.', descEn: 'Review and establish the essential software foundation for a small office.', items: ['Thiết lập thiết bị & phần mềm cơ bản', 'Chuẩn hoá Office, driver, máy in, font', 'Bàn giao checklist sử dụng'], itemsEn: ['Core device and software setup', 'Office, driver, printer and font standardisation', 'Operational handover checklist'] },
  { id: 'm365-setup', title: 'Microsoft 365 Setup', titleEn: 'Microsoft 365 Setup', price: '2.500.000đ + license', priceEn: '2,500,000 VND + licences', desc: 'Cấu hình môi trường làm việc Microsoft 365 cho đội ngũ.', descEn: 'Configure a Microsoft 365 working environment for your team.', items: ['Thiết lập email, tài khoản và thiết bị', 'Phân quyền cơ bản & hướng dẫn dùng', 'License báo giá riêng theo nhu cầu'], itemsEn: ['Email, account and device setup', 'Basic permissions and team training', 'Licences quoted separately'] },
  { id: 'it-care', title: 'IT Care Basic', titleEn: 'IT Care Basic', price: 'Từ 1.500.000đ/tháng', priceEn: 'From 1,500,000 VND / month', desc: 'Gói hỗ trợ định kỳ cho doanh nghiệp cần đầu mối IT linh hoạt.', descEn: 'Recurring support for small teams that need a flexible IT point of contact.', items: ['Hỗ trợ từ xa theo SLA đã thống nhất', 'Theo dõi lỗi & đề xuất cải thiện', 'Báo cáo hỗ trợ định kỳ'], itemsEn: ['Remote support under an agreed SLA', 'Issue tracking and improvement suggestions', 'Recurring support reporting'] },
] as const

export const PROCESS = [
  { step: '01', title: 'Gửi yêu cầu', titleEn: 'Send a request', desc: 'Chọn dịch vụ, thiết bị và mô tả vấn đề trong form ngắn gọn.', descEn: 'Choose a service, device and briefly describe the issue.' },
  { step: '02', title: 'Xác nhận & báo giá', titleEn: 'Confirm & quote', desc: 'LihTech kiểm tra thông tin, làm rõ nhu cầu và xác nhận chi phí.', descEn: 'LihTech reviews the request, clarifies needs and confirms the cost.' },
  { step: '03', title: 'Hỗ trợ từ xa', titleEn: 'Remote support', desc: 'Kỹ thuật viên kết nối theo lịch đã hẹn và xử lý minh bạch.', descEn: 'A technician connects at the agreed time and works transparently.' },
  { step: '04', title: 'Bàn giao & hậu hỗ trợ', titleEn: 'Handover & follow-up', desc: 'Kiểm tra lại, hướng dẫn sử dụng và ghi nhận hỗ trợ sau dịch vụ.', descEn: 'Verify, hand over and record follow-up support.' },
] as const

export const FAQS = [
  { q: 'Microsoft 365 có phải bản quyền vĩnh viễn không?', qEn: 'Is Microsoft 365 a perpetual licence?', a: 'Không. Microsoft 365 là dịch vụ thuê bao. LihTech chỉ tư vấn và báo giá gói hợp pháp đúng thời hạn; chi phí license luôn tách riêng phí kỹ thuật.', aEn: 'No. Microsoft 365 is a subscription. LihTech only quotes legitimate plans for the correct term, and licence costs are always separate from technical service fees.' },
  { q: 'Tôi có cần đưa mật khẩu tài khoản chính không?', qEn: 'Do I need to share my main account password?', a: 'Không. Chúng tôi không yêu cầu mật khẩu chính của email, Microsoft hay tài khoản cá nhân. Khi cần đăng nhập, bạn tự thao tác trên thiết bị của mình.', aEn: 'No. We do not ask for main email, Microsoft or personal-account passwords. When sign-in is needed, you enter it yourself on your device.' },
  { q: 'Giá trên web có phải là giá cuối cùng?', qEn: 'Is the website price final?', a: 'Đây là mức giá tham khảo để bạn chủ động. LihTech xác nhận lại phạm vi và chi phí trước khi bắt đầu; các hạng mục license, thiết bị hoặc yêu cầu phát sinh được báo riêng.', aEn: 'These are guide prices to help you plan. LihTech confirms scope and cost before starting; licences, hardware and additional work are quoted separately.' },
  { q: 'Doanh nghiệp có thể hỗ trợ nhiều máy không?', qEn: 'Can you support multiple business devices?', a: 'Có. Hãy chọn “IT Support doanh nghiệp” khi đặt lịch. LihTech sẽ ghi nhận quy mô, nhu cầu và đề xuất phương án triển khai hoặc gói hỗ trợ định kỳ phù hợp.', aEn: 'Yes. Choose “Business IT support” when booking. LihTech will review your scale and needs, then propose deployment or recurring support that fits.' },
] as const

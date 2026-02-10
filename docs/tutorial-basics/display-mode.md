---
sidebar_position: 4
---

import { Monitor, Moon, Sun, Bell } from 'lucide-react';

# การปรับธีมสีหน้าจอ

---

หากผู้ใช้ต้องการที่จะปรับโหมดหน้าจอเว็บไซต์ สามารถทำได้โดยการกดไปที่สัญลักษณ์ไอคอนที่อยู่ติดกับไอคอนกระดิ่งแจ้งเตือน <Bell size={18} style={{ verticalAlign: 'middle', color: '#888' }} /> เพื่อปรับธีมสีหน้าจอได้

<br />

<div style={{ textAlign: 'center', backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px' }}>
  <img src="/img/mode01.png" alt="การปรับโหมดหน้าจอ" width="350" style={{ borderRadius: '5px' }} />
  <p style={{ marginTop: '10px', fontSize: '14px', color: '#aaa' }}>ตัวอย่างตำแหน่งปุ่มปรับโหมดหน้าจอ</p>
</div>

<br />
---

### รูปแบบการปรับธีมสีหน้าจอ
โดยการปรับธีมสีหน้าจอมี 3 แบบ ดังนี้

1. **ธีมสีตามระบบ (System) :** <Monitor size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />  
   ปรับโทนสีตามการตั้งค่า Window หรือระบบปฏิบัติการของผู้ใช้
   
2. **ธีมสีมืด (Dark Mode) :** <Moon size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />  
   โทนเว็บไซต์จะเป็นสีดำเป็นหลัก ช่วยถนอมสายตาในที่มืด
   
3. **ธีมสีสว่าง (Light Mode) :** <Sun size={20} style={{ verticalAlign: 'middle', marginRight: '8px'}} />  
   โทนเว็บไซต์จะเป็นสีขาวเป็นหลัก เหมาะสำหรับการอ่านในที่แสงจ้า

---


---
sidebar_position: 4
---

import { Users , FileText, Upload, ZoomIn, Maximize, ZoomOut, ChevronsDownUp, ChevronsUpDown, Lock, Search, Radius, Star, Settings2, Vote, ChevronsDown, List, ToggleRight, FileUp, Image, ArrowDownNarrowWide, RectangleHorizontal, AlignLeft, Rows3, Square, PlusSquare, LayoutGrid, Grid3X3, CodeXml, TableCellsSplit, Sigma, Signature, Trash2, ArrowDownUp } from 'lucide-react';

# หน้าสร้างแบบฟอร์ม
หน้าสร้างแบบฟอร์ม เป็นจุดเริ่มต้นสำหรับการออกแบบและกำหนดค่าชุดคำถามใหม่ตามความต้องการของผู้ใช้ โดยระบบมาพร้อมกับเครื่องมือที่ช่วยให้การสร้างแบบฟอร์มเป็นเรื่องง่าย ตั้งแต่การเลือกรูปแบบคำถาม การตั้งค่าเงื่อนไข (Logic) ไปจนถึงการปรับแต่งหน้าตาของฟอร์ม 

---

หลังจากที่กดปุ่ม **สร้างแบบฟอร์ม** ในแท็บหน้าฟอร์มของฉันแล้ว จะเข้ามาใน **หน้าสร้างแบบฟอร์มใหม่**

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form20.png" alt="คำอธิบายรูป" width="800" />
</div>

---

เข้ามาที่ **หน้าแบบฟอร์มใหม่** ในหน้านี้จะอธิบาย 3 ส่วนหลักๆ เป็นส่วนที่ใช้สลับหน้าการทำงานหลักในการสร้างฟอร์ม ได้แก่

1. <FileText size={20} style={{ verticalAlign: 'middle',  }} /> แบบสำรวจ
2. <Users size={20} style={{ verticalAlign: 'middle', }} /> ผู้จัดการ
3. <Upload size={20} style={{ verticalAlign: 'middle',}} /> การเผยแพร่

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form21.png" alt="คำอธิบายรูป" width="300" />
</div>

---

## ส่วนที่ 1 แบบสำรวจ

**แบบสำรวจ หรือ สร้างแบบสำรวจ** : หน้านี้จะเป็นการสร้างและออกแบบแบบฟอร์มทั้งหมดตามที่ผู้ใช้ต้องการ อีกทั้งยังมีเครื่องมือมากมาย โดยจะอธิบายออกเป็นส่วนๆ ดังนี้

---

### 1.1 สถานะและปุ่มส่งออกข้อมูล

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form22.png" alt="คำอธิบายรูป" width="400" />
</div>

- **สถานะ :** บอกว่าแบบฟอร์มนี้บันทึกแล้วหรือยัง
- **ปุ่มเลือกโหมด / ประเภทแบบฟอร์ม :** มี 2 แบบ ได้แก่ โหมดแบบสำรวจ และ โหมดแบบทดสอบ หากผู้ใช้ต้องการเลือกโหมด / ประเภทแบบฟอร์มเป็นแบบไหนสามารถกดที่ปุ่มโหมดเพื่อเปลี่ยนประเภทแบบฟอร์มตามที่ต้องการได้
- **ปุ่ม PDF :** ปุ่มนี้สำหรับกรณีที่ผู้ใช้ต้องการดาวน์โหลดแบบฟอร์มที่ผู้ใช้สร้างให้ออกมาเป็นในรูปแบบ PDF

<div style={{
  backgroundColor: '#f5f3ff',
  border: '1px solid #ddd6fe',
  borderLeft: '5px solid #7c3aed',
  padding: '12px 16px',
  borderRadius: '12px',
  margin: '15px 0',
  boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)',
  lineHeight: '1.6'
}}>
  <span style={{ color: '#7c3aed', fontWeight: 'bold', fontSize: '1.1em' }}>• ✨ ปุ่ม AI (ฟีเจอร์ช่วยสร้าง) :</span> <span style={{ fontWeight: 'bold', color: '#4c1d95' }}> ทางเลือกใหม่ที่สะดวกกว่า! </span> <span style={{ color: '#4b5563' }}>เป็นปุ่มสำหรับพูดคุยกับ AI เพื่อให้ช่วยออกแบบหรือคิดคำถามในแบบฟอร์ม เพียงพิมพ์สิ่งที่ผู้ใช้ต้องการลงไป AI จะช่วยร่างเนื้อหาให้ทันที ช่วยประหยัดเวลาและเพิ่มไอเดียในการสร้างแบบฟอร์มได้ดียิ่งขึ้น</span>
</div>

- **ปุ่มไอคอนรูปขยาย :** ปุ่มนี้จะเป็นการขยายหน้าจอการสร้างแบบฟอร์มให้เห็นเต็มหน้าจอเพื่อให้มองเห็นและสร้างแบบฟอร์มได้ง่ายมากยิ่งขึ้น

<br />

**เพิ่มเติมตัวอย่างการใช้  ปุ่ม AI**

เมื่อกดที่**ปุ่ม AI** ผู้ใช้จะเจอกับแถบด้านข้างทางซ้ายนี้ขึ้นมา เป็นส่วนแถบแชทไว้คุยกับ AI ในการช่วยสร้างแบบฟอร์ม สามารถพิมพ์สิ่งที่ผู้ใช้ต้องการเพื่อให้ AI ช่วยได้ที่ช่องพิมพ์แชทด้านล่าง
<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form72.png" alt="คำอธิบายรูป" width="750" />
</div>

<br />

- **ตัวอย่างการใช้งานแชทกับ AI**

จากในภาพเป็นตัวอย่างการใช้ AI ในการคุยพิมพ์แชท โดยถามคำถามว่าต้องการให้ AI ช่วยในการสร้างแบบฟอร์มประเมินความพึงพอใจในการดูภาพยนต์ที่โรงหนัง มา 5 คำถาม
<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form73.png" alt="คำอธิบายรูป" width="350" />
</div>

<br />

- **หน้าแบบฟอร์มผลลัพธ์ที่ได้หลังจากให้ AI ช่วยสร้างแบบฟอร์ม**
<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form74.png" alt="คำอธิบายรูป" width="750" />
</div>

<br />

- นอกจากนี้ผู้ใช้ยังสามารถดูแบบฟอร์มตัวอย่างจากผลลัพธ์ได้ในแถบ Preview เพื่อดูภาพรวมตัวอย่างแบบฟอร์มก่อนที่จะทำการเผยแพร่จริงได้ในนี้
<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form75.png" alt="คำอธิบายรูป" width="750" />
</div>
---

### 1.2 แถบเครื่องมือจัดการมุมมอง

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form23.png" alt="คำอธิบายรูป" width="400" />
</div>

ในแบบสำรวจ หรือ สร้างแบบสำรวจ มีแท็บย่อยๆอีกดังนี้

- **Designer :** เป็นหน้าส่วนในการสร้างแบบฟอร์มมีเครื่องมือมากมายให้เลือกใช้
- **Preview :** ส่วนนี้จะแสดงหน้าแบบฟอร์มของเราที่สร้างให้ดูเป็นตัวอย่างก่อนที่จะเผยแพร่จริง
- **Themes :** เป็นส่วนกำหนดธีมแบบฟอร์มกำหนดพวกสีแบบฟอร์ม ปรับแต่งส่วนหัวข้อแบบฟอร์มต่างๆ
- **Logic :** เป็นส่วนการกำหนด / สร้างกฎเกณฑ์เชิงตรรกะเพื่อปรับแต่งขั้นตอนการสำรวจ
- **JSON Editor :** เป็นส่วนของการแก้ไขแบบฟอร์มด้วย JSON

---

### 1.3 แถบ Designer

ผู้ใช้จะเจอกับแบบฟอร์มว่างเปล่าเนื่องจากยังไม่ได้สร้างแบบฟอร์มให้ผู้ใช้เริ่มสร้างโดยการกดที่ปุ่ม Add Question ในการเพิ่มคำถามสำหรับเริ่มสร้างแบบฟอร์ม

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form24.png" alt="คำอธิบายรูป" width="400" />
</div>

<br />

หลังจากที่ผู้ใช้กดปุ่มเริ่มสร้างคำถามแล้ว จะเจอกับหน้าตาแบบนี้ ต่อไปจะเป็นการอธิบายส่วนของรายละเอียดเครื่องมือด้านล่างของกล่องคำถามดังนี้

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form25.png" alt="คำอธิบายรูป" width="500" />
</div>

<br />

- **ตัวเลือก Single-Line Input :** เป็นเครื่องมือในการเลือกหรือกำหนดตัวเลือกว่าต้องการรูปแบบคำถามให้ผู้ตอบแบบฟอร์มต้องตอบเป็นไหน ในที่นี้ค่าเริ่มต้น Single-Line Input เป็นการรับคำตอบแบบให้ผู้ตอบพิมพ์ตอบลงไป
- **ตัวเลือก Text :** เป็นส่วนตัวเลือกเพิ่มเติมของ Single-Line Input โดยเฉพาะ โดยสามารถกำหนดเพิ่มได้ว่าอยากให้รับคำตอบของ Single-Line Input เป็นข้อความรูปแบบไหน เช่น เบอร์โทร , วันที่และเวลา , ข้อความ เป็นต้น
- **ปุ่ม Duplicate :** ไอคอนรูปCopy เป็นการคัดลอกและวางคำถามที่เลือกนั้นๆ
- **ปุ่ม Required :** ไอคอนรูปดอกจันทร์ เป็นการกำหนดว่าคำถามที่เลือกนี้จำเป็นต้องตอบไหม ถ้าไม่กดปุ่มนี้ผู้ตอบจะสามารถข้ามเลือกไม่ตอบคำถามนี้ได้ แต่ถ้ากดปุ่มเลือก Required คำถามจะกำหนดว่าจำเป็นต้องให้ผู้ตอบตอบให้ครบก่อนถึงจะกดส่งได้
- **ปุ่ม Delete :** ไอคอนรูปถังขยะ ถ้ากดปุ่มนี้จะเป็นการลบคำถามที่เลือก

<br />

นอกจากนี้ผู้ใช้ยังสามารถใส่คำถามหรือใส่คำอธิบายคำถามนั้น รวมถึงปรับส่วนอื่นๆเพิ่มเติมได้จากตรงหน้าต่างด้านขวาตรงนี้ได้

<div style={{ textAlign: 'center' }}>
  <img src="/img/create-form/create-form26.png" alt="คำอธิบายรูป" width="800" />
</div>

<br />

**อธิบายเครื่องมือในส่วนการมุมมองหน้าสร้างแบบฟอร์ม** ดังนี้

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
  
  {/* ส่วนที่ 1: รูปภาพไอคอนด้านซ้าย */}
  <div style={{ flex: '0 0 auto', backgroundColor: '#222', padding: '10px', borderRadius: '8px' }}>
    <img src="/img/create-form/create-form27.png" alt="Sidebar Tools" width="60" />
  </div>

{/* ส่วนที่ 2: คำอธิบายด้านขวา */}

  <div style={{ flex: '1' }}>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{ marginBottom: '8px' }}>
      <ZoomIn size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} />  <strong>ปุ่ม Zoom in : </strong> เป็นการซูมหน้าสร้างแบบฟอร์มให้ใหญ่ขึ้น
    </li>
      <li style={{ marginBottom: '8px' }}>
         <Maximize size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>ปุ่ม Zoom to 100% : </strong> เป็นการปรับหน้าสร้างแบบฟอร์มให้อยู่ในระดับปกติ
      </li>
      <li style={{ marginBottom: '8px' }}>
        <ZoomOut size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>ปุ่ม Zoom out : </strong> เป็นการซูมหน้าสร้างแบบฟอร์มออกให้เล็กลง
      </li>
      <li style={{ marginBottom: '8px' }}>
        <ChevronsDownUp size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>ปุ่ม Collapse all : </strong> เป็นการซ่อนคำถามให้เหลือแต่ส่วนของ Page
      </li>
      <li style={{ marginBottom: '8px' }}>
        <ChevronsUpDown size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>ปุ่ม Expand all : </strong>  เป็นการเปิดแสดงคำถามทั้งหมด
      </li>
      <li style={{ marginBottom: '8px' }}>
         <Lock size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>ปุ่ม Lock expand : </strong> เป็นการล็อกไม่ให้ยุบตัว ระบบจะล็อกให้กล่องคำถามทุกข้ออยู่ในสถานะ "กางออก" ตลอดเวลา
      </li>
    </ul>
  </div>
</div>


<br />

ถัดมา **อธิบายเครื่องมือที่อยู่ทางด้านซ้ายการสร้างแบบฟอร์ม** ในแถบ Designer  
โดยผู้ใช้สามารถกดดูเครื่องมือชัดๆขยายได้ที่กดปุ่ม <Search size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} />

 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
  
  {/* ส่วนที่ 1: รูปภาพไอคอนด้านซ้าย */}
  <div style={{ flex: '0 0 auto', backgroundColor: '#000000', padding: '10px', borderRadius: '8px' , marginTop: '100px' }}>
    <img src="/img/create-form/create-form28.png" alt="Sidebar Tools" width="200" />
  </div>

{/* ส่วนที่ 2: คำอธิบายด้านขวา */}

  <div style={{ flex: '1' }}>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{ marginBottom: '8px' }}>
      <Radius size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} />  <strong>เครื่องมือ Radio Button Group :  </strong> คือกลุ่มปุ่มเลือกที่มีชุดของตัวเลือกให้ผู้ใช้เลือกตอบ ซึ่งผู้ใช้จะเลือกตอบได้แค่เพียงคำตอบเดียวเท่านั้น จากบรรดาตัวเลือกทั้งหมดที่มีให้
    </li>
      <li style={{ marginBottom: '8px' }}>
         <Star size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Rating Scale : </strong> คือมาตราวัดระดับ เป็นการให้ผู้ใช้ประเมินค่าตามลำดับขั้นที่กำหนดไว้ มักเห็นในรูปแบบของ ดาว (Stars) หรือ ตัวเลข (1-5, 1-10)
      </li>
      <li style={{ marginBottom: '8px' }}>
        <Settings2 size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Silder : </strong> คือครื่องมือที่ให้ผู้ใช้เลือกค่าโดยการลาก "ปุ่ม" ไปตามแถบแนวนอน เพื่อระบุค่าที่ผู้ใช้ต้องการตอบ
      </li>
      <li style={{ marginBottom: '8px' }}>
        <Vote size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Checkboxes : </strong> คือช่องเลือกหลายรายการ ที่เป็นสี่เหลี่ยมเล็กๆ ที่มีเครื่องหมายถูกเมื่อเลือก ผู้ใช้สามารถเลือกตอบได้มากกว่าหนึ่งตัวเลือก
      </li>
      <li style={{ marginBottom: '8px' }}>
        <ChevronsDown size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Dropdown : </strong>  คือเมนูแบบเลือกรายการเดียว เป็นแถบที่เมื่อคลิกแล้วจะมีรายการยืดลงมาให้ผู้ใช้เลือกตอบ
      </li>
      <li style={{ marginBottom: '8px' }}>
         <List size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Multi-Select Dropdown : </strong> คือเมนูแบบเลือกได้หลายรายการ ผสมระหว่าง Checkbox และ Dropdown เข้าด้วยกัน คล้ายกับ Dropdown ทั่วไปแต่เมื่อคลิกแล้วสามารถติ๊กเลือกได้หลายรายการ 
      </li>
      <li style={{ marginBottom: '8px' }}>
         <ToggleRight size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เเครื่องมือ Yes/No (Boolean) : </strong> คือใช้สำหรับการตัดสินใจที่มีเพียง 2 สถานะ ที่ตรงข้ามกัน เช่น จริง/เท็จ, เปิด/ปิด
      </li>
      <li style={{ marginBottom: '8px' }}>
         <FileUp size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ File Upload ปุ่มรูปอัปโหลดไฟล์ : </strong> คือเครื่องมือที่เอาไว้ให้ผู้ใช้อัปโหลดไฟล์จากเครื่องคอมพิวเตอร์หรือมือถือลงสู่ระบบแบบฟอร์ม
      </li>
    </ul>
  </div>
</div>

<br />

 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
  
  {/* ส่วนที่ 1: รูปภาพไอคอนด้านซ้าย */}
  <div style={{ flex: '0 0 auto', backgroundColor: '#000000', padding: '10px', borderRadius: '8px' , marginTop: '80px' }}>
    <img src="/img/create-form/create-form29.png" alt="Sidebar Tools" width="200" />
  </div>

{/* ส่วนที่ 2: คำอธิบายด้านขวา */}

  <div style={{ flex: '1' }}>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{ marginBottom: '8px' }}>
      <Image size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} />  <strong>เครื่องมือ Image Picker : </strong> คือเครื่องมือให้ผู้ใช้อัปโหลดไฟล์รูปภาพโดยเฉพาะจากเครื่องคอมพิวเตอร์หรือมือถือ โดยไฟล์ที่อัปโหลดสามารถแสดงเป็นตัวอย่างรูปภาพให้ผู้ใช้เห็นได้ด้วย
    </li>
      <li style={{ marginBottom: '8px' }}>
         <ArrowDownNarrowWide size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Ranking : </strong> คือการจัดลำดับเมื่อต้องการให้ผู้ใช้เรียงลำดับความสำคัญจากมากไปน้อยหรือตามความชอบ
      </li>
      <li style={{ marginBottom: '8px' }}>
        <RectangleHorizontal size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Single-Line Input :</strong> คือช่องกรอบบรรทัดเดียว เป็นช่องรับข้อมูลข้อความสั้นๆให้ผู้ใช้พิมพ์ตอบที่มีความยาวจำกัด
      </li>
      <li style={{ marginBottom: '8px' }}>
        <AlignLeft size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Long Text : </strong> คือช่องกรอบข้อความแบบยาว เป็นช่องรับข้อมูลข้อความที่ผู้ใช้สามารถพิมพ์หรือเขียนข้อความได้มากกว่า 1 บรรทัด 
      </li>
      <li style={{ marginBottom: '8px' }}>
        <Rows3 size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Multiple Textboxes : </strong>  คือกลุ่มช่องกรอกข้อมูล ที่นำ Single-Line Input  หลายๆช่องมาวางรวมกันเพื่อรับข้อมูลที่เป็นชุดเดียวกัน
      </li>
      <li style={{ marginBottom: '8px' }}>
         <Square size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Panel : </strong> คือแผงควบคุม/กล่องเนื้อหา ใช้ ภาชนะ(Container) ที่ใช้จัดกลุ่ม Element ต่างๆ เข้าด้วยกันเพื่อให้หน้าจอดูเป็นสัดส่วน
      </li>
      <li style={{ marginBottom: '8px' }}>
         <PlusSquare size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Dynamic Panel : </strong> แผงควบคุมแบบปรับเปลี่ยนได้ เป็น Panel ปกติที่เพิ่มเติมส่วนของการ เปลี่ยนเนื้อหาภายในได้ตามเงื่อนไขโดยไม่ต้องโหลดหน้าเว็บใหม่
      </li>
    </ul>
  </div>
</div>

<br />

 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
  
  {/* ส่วนที่ 1: รูปภาพไอคอนด้านซ้าย */}
  <div style={{ flex: '0 0 auto', backgroundColor: '#000000', padding: '10px', borderRadius: '8px' , marginTop: '80px' }}>
    <img src="/img/create-form/create-form30.png" alt="Sidebar Tools" width="200" />
  </div>

{/* ส่วนที่ 2: คำอธิบายด้านขวา */}

  <div style={{ flex: '1' }}>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{ marginBottom: '8px' }}>
      <LayoutGrid size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} />  <strong>เครื่องมือ Single-Select Matrix :</strong> คือตารางคำถามเชิงเปรียบเทียบ ที่บังคับให้ผู้ใช้เลือกคำตอบเดียวในแต่ละหัวข้อ
    </li>
      <li style={{ marginBottom: '8px' }}>
         <Grid3X3 size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Multi-Select Matrix :  </strong> คือตารางคำถามเชิงเปรียบเทียบ ที่มีการนำ Dropdown หลายๆอันมาวางเรียงกันเป็นตาราง เพื่อให้ผู้ใช้เลือกค่าเฉพาะเจาะจงลงไปในแต่ละช่องคอลัมน์ได้ 
      </li>
      <li style={{ marginBottom: '8px' }}>
        <TableCellsSplit size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Dynamic Matrix : </strong>  คือตารางแบบยืดหยุ่นที่ผู้ใช้สามารถเพิ่มหรือลบแถวเองได้ ตามปริมาณข้อมูลที่มีจริงได้
      </li>
      <li style={{ marginBottom: '8px' }}>
        <CodeXml size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ HTML : </strong> เป็นพื้นที่สำหรับให้ผู้สร้างฟอร์มใส่ Code ภาษา HTML เพื่อแสดงผลเนื้อหาที่เครื่องมือมาตรฐานอื่นๆทำไม่ได้ โดยปกติแล้วช่องนี้จะมีไว้สำหรับผลอย่างเดียว 
      </li>
      <li style={{ marginBottom: '8px' }}>
        <Sigma size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Expression (read-only) :</strong>  คือเครื่องมือที่ใช้สำหรับ "แสดงผลลัพธ์จากการคำนวณ" หรือแสดงค่าที่ดึงมาจากคำถามข้ออื่นโดยอัตโนมัติ ซึ่งผู้ตอบแบบฟอร์มไม่สามารถแก้ไขข้อความในช่องนี้ได้ ทำได้แค่อ่านอย่างเดียว
      </li>
      <li style={{ marginBottom: '8px' }}>
         <Image  size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Image : </strong> คือส่วนประกอบที่ใช้สำหรับ "แสดงรูปภาพ" เพื่อประกอบคำอธิบายหรือตกแต่งฟอร์ม โดยรูปภาพนี้ผู้สร้างฟอร์มจะเป็นคนใส่ไว้ให้ผู้ตอบดูเท่านั้น
      </li>
      <li style={{ marginBottom: '8px' }}>
         <Signature size={20} style={{ verticalAlign: 'middle', margin: '0 5px' }} /> <strong>เครื่องมือ Signature : </strong> คือช่องลงลายเซ็น เครื่องมือที่อนุญาตให้ผู้ตอบแบบฟอร์ม สามารถใช้นิ้วมือบนสมาร์ทโฟน/แท็บเล็ตหรือเมาส์บนคอมพิวเตอร์ วาดลายเซ็นจริงลงไปบนหน้าจอได้ทันที
      </li>
    </ul>
  </div>
</div>

<br />

ต่อไปจะเป็นการ **อธิบายเครื่องมือในแถบ Designer ส่วนที่อยู่ทางด้านขวาของจอ**

<br />

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '25px' }}>

{/* ส่วนที่ 1: รูปภาพด้านซ้าย */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', flex: '0 0 auto' }}>
    
    <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
      <img src="/img/create-form/create-form31.png" alt="Sidebar Tools 1" width="60" />
    </div>

    <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '8px' }}>
      <img src="/img/create-form/create-form32.png" alt="Sidebar Tools 2" width="60" />
    </div>

  </div>


  {/* ส่วนที่ 2: เนื้อหาด้านขวา */}
  <div style={{ flex: '1' }}>

**เครื่องมือ Show Panel**

<div style={{ textAlign: 'left', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form34.png" alt="คำอธิบายรูป" width="70" />
</div>

ถ้ากดปุ่มนี้จะเป็นการซ่อน/ขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดเพิ่มเติม

---

**เครื่องมือ General :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของแบบฟอร์ม

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form33.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ General**

- ใส่ชื่อแบบฟอร์ม (Survey title)
- ใส่คำอธิบายแบบสำรวจ (Survey description)
- ทำให้ส่วนของทำให้ชื่อเรื่องและคำอธิบายมองเห็นได้ชัดเจน (Make the title and description visible)
- ทำให้ส่วนของตั้งค่าแบบสอบถามให้เป็นแบบอ่านอย่างเดียว (Make the survey read-only)
- การเลือกภาษาสำหรับแบบสอบถาม (Select a Survey language) โดยค่าเริ่มต้นจะเป็นภาษาอังกฤษ
- การจำกัดการตอบกลับเพียงครั้งเดียว (Limit to one response)
- โหมดความกว้างการสำรวจ (Survey width mode) สามารถเลือกได้ 3 แบบ ได้แก่ แบบอัตโนมัติ (Auto), แบบสถิต (Static), แบบตอบสนอง (Responsive)

---

**เครื่องมือ Logo in the Survey Header :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรูปโลโก้

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form35.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Logo in the Survey Header**

- เลือกไฟล์หรือวางลิงก์ไฟล์ของรูปโลโก้แบบฟอร์ม (Survey logo)
- ตั้งความกว้างของโลโก้ (Logo width)
- กำหนดความสูงของโลโก้ (Logo height)
- ปรับขนาดโลโก้ (Logo fit) โดยมีให้เลือก 4 แบบ ได้แก่ แบบไม่ปรับ (None), แบบปรับให้พอดี (Contain), แบบเต็มกรอบ (Cover), แบบดึงเต็มกรอบพอดี (Fill)

---

**เครื่องมือ Navigation :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของแถบนำทาง

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form36.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Navigation**

- เค้าโครงแบบฟอร์ม(Survay layout) มีให้เลือก 4 แบบ ได้แก่
  - แบบโครงสร้างดั้งเดิม(Original structure)
  - แบบแสดงคำถามทั้งหมดในหน้าเดียว(Show all questions on one page)
  - แบบแสดงคำถามเดียวต่อหน้า(Show single question per page)
  - แบบแสดงช่องป้อนข้อมูลช่องเดียวต่อหน้า(Show single input field per page )
- ทำให้หน้าแรกคือหน้าเริ่มต้น(First page is a start page)
- ทำให้เลื่อนไปยังหน้าถัดไปโดยอัตโนมัติ(Auto-advance to the next page)
- ทำให้แสดงปุ่มนำทาง(Show navigation buttons)
- การจัดเรียงปุ่มนำทาง(Navigation buttons alignment) มีให้เลือก 3 แบบ ได้แก่ แบบสูงสุด(Top) , แบบด้านล่าง(Bottom) , แบบบนและล่าง(Top and bottom)
- ทำให้แสดงปุ่ม “หน้าก่อนหน้า” (Show the “Previous Page” button)
- ทำให้แสดงแถบแสดงความคืบหน้า(Show the progress bar)
- ทำให้แสดงสารบัญ(TOC) (Show table of contents(TOC))
- ทำให้ตรวจสอบก่อนส่ง(Review before submit)
- การกำหนดข้อความบนปุ่ม “หน้าก่อนหน้า” (“Previous Page” button text)
- การกำหนดข้อความบนปุ่ม “หน้าถัดไป” (“Next Page” button text)
- การกำหนดข้อความบนปุ่ม “ทำแบบสำรวจให้เสร็จสมบูรณ์” (“Complete Survey” button text)
---

**เครื่องมือ Question Setting :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของการตั้งค่าคำถาม(Question Settings) ของแบบฟอร์ม

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form37.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Question Setting**
- การกำหนดลำดับคำถาม(Question order) มีให้เลือก 2 แบบ ได้แก่ แบบต้นฉบับ(Original) , แบบสุ่ม(Random)
- การจัดเรียงชื่อคำถาม(Questiom title alignment) มีให้เลือก 2 แบบ ได้แก่ สูงสุด(Top) , ด้านล่าง(Bottom) , ทางซ้าย(Left)
- การจัดเรียงคำอธิบายคำถาม(Question description alignment) มีให้เลือก 2 แบบ ได้แก่ ใต้ชื่อป้อนข้อมูล(Unde.r the input field) , ภายใต้หัวข้อคำถาม(Under the question title)
- การกำหนดหมายเลขคำถาม(Question numbering) มีให้เลือก 4 แบบ ได้แก่  
  - การกำหนดหมายเลขอัตโนมัติ(Auto-numbering) 
  - รีเซ็ตในแต่ละหน้า(Reset on each page) 
  - การกำหนดหมายเลขแบบเรียกซ้ำ(Recursive numbering) 
  - ไม่มีการกำหนดหมายเลข(No numbering)
- รูปแบบชื่อคำถาม(Question title pattern)  มี 3 ตัวเลือก ได้แก่ 
  - 1.หัวข้อคำถาม* (1.Question Title*) 
  - 1.*หัวข้อคำถาม(1.*Question Title) 
  - 1.หัวข้อคำถาม(1.Question Title)
- การกำหนดสัญลักษณ์ที่จำเป็น(Required symbol(s))
- การจัดเรียงข้อความแสดงข้อผิดพลาด(Error message alignment) มี 2 ตัวเลือก ได้แก่ สูงสุด(Top) , ด้านล่าง(Bottom)
- การกำหนดให้ตั้งคำถามแรกในหน้าใหม่(Focus first question on a new page) 
- การกำหนดจำกัดความยาวของคำตอบ(Restrict answer page)
- การกำหนดจำกัดความยาวของความคิดเห็น(Restrict comment length)
- การกำหนดความสูงของพื้นที่แสดงความคิดเห็น(เป็นบรรทัด) (Comment area height(in lines))
- การกำหนดขยายพื้นที่ข้อความอัตโนมัติ(Auto-expand text areas)
- การกำหนดอนุญาตให้ผู้ใช้ปรับขนาดพื้นที่ข้อความได้(Allow users to resize text areas)

---

**เครื่องมือ Pages :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของ Pages Survey
ที่เป็นส่วนแก้ไขรายละเอียดของการตั้งค่าคำถาม(Question Settings) ของแบบฟอร์ม

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form38.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Pages**
- แสดงหน้า Page ของแบบฟอร์ม
- การกำหนดแสดงชื่อหน้า(Show page titles)
- การกำหนดแสดงหมายเลขหน้า(Show page numbers)
- การกำหนดให้เปิดใช้งานเค้าโครงตาราง(Enable grid layout)

---

**เครื่องมือ Conditions :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของเงื่อนไข(Conditions Survey)

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form39.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Conditions**
- ตั้งค่าตัวแปรแบบกำหนดเอง(Custom variables)
- ตั้งค่าตัวกระตุ้น(Triggers)

---

**เครื่องมือ Data :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของข้อมูล(Data Survey) 

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form40.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Data**
- การล้างค่าคำถามที่ซ่อนอยู่(Clear hidden question values) มี 4 ตัวเลือก ได่แก่ 
  - ไม่เคย(Never) 
  - เมื่อการสำรวจเสร็จสิ้น(Upon survey completion) 
  - เมื่อคำถามถูกซ่อนไว้(When question gets hidden) 
  - เมื่อคำถามหรือแผง/หน้าของคำถามซ่อน(When question or its panel/page gets hidden)
- อัปเดตค่าในช่องป้อนข้อมูล(Update input field values) มี 2 ตัวเลือก ได่แก่ เมื่อเสียสมาธิ(On lost focus) , ขณะพิมพ์(While typing)
- การกำหนดให้บันทึกความคืบหน้าของแบบสำรวจโดยอัตโนมัติเมื่อเปลี่ยนหน้า(Auto-save survey progress on page change)
- การบันทึกค่าตัวเลือก “อื่นๆ” เป็นคุณสมบัติแยกต่างหาก(Save the “Other” option values as a separate property)
---

**เครื่องมือ Validation :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของการตรวจสอบความถูกต้อง(Validation Survey) 

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form41.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Validation**
- การกำหนดตั้งโฟกัสไปที่คำตอบที่ไม่ถูกต้องข้อแรก(Set focus on the first invalid answer)
- การเรียกใช้การตรวจสอบความถูกต้อง(Run validation) มี 3 ตัวเลือก ได้แก่ 
  - เมื่อเปลี่ยนไปหน้าถัดไป(When switching to the next page) 
  - หลังจากเปลี่ยนคำตอบแล้ว(After an answer is changed) 
  - เมื่อการสำรวจเสร็จสิ้น(Upon survey completion)

---

**เครื่องมือ “Thank You” Page :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของหน้าขอบคุณ(“Thank You” Page Survey) 

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form42.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ “Thank You” Page**
- เปลี่ยนเส้นทางไปยังลิงก์ภายนอกหลังจากส่งข้อมูล(Redirect to an external link after submission)
- ลิงก์ภายนอกแบบไดนามิก(Dynamic external link) 
- การกำหนดแสดงหน้า “ขอบคุณ” (Show the “Thank you” page)
- มาร์กอัปหน้า “ขอบคุณ” (“Thank you” page markup)
- มาร์กอัปหน้า “ขอบคุณ” แบบไดนามิก (Dynamic “Thank you” page markup)
- มาร์กอัปที่จะแสดงขณะที่กำลังโหลดแบบจำลองสำรวจ(Markup to show while survey model is loading)
- มาร์กอัปเพื่อแสดงว่าผู้ใช้ได้กรอกแบบสำรวจนี้แล้วหรือไม่(Markup to show if the user already filled out this survey)
---

**เครื่องมือ Quick mode :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของโหมดตอบคำถาม(Quick mode Survey)  

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form43.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Quick mode**
- การใช้ตัวจับเวลา(Use a timer)
---

**เครื่องมือ Creator Settings :** เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของการตั้งค่าผู้สร้าง(Creator Settings  Survey)  

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form44.png" alt="คำอธิบายรูป" width="350" />
</div>

**รายละเอียดใน Panel ของ Creator Settings**
- เลือกชื่อธีมสี(Theme name) 
- เลือกสีเน้น(Accent colors) มีดังนี้ ตั้งสีหลัก(Primary) , ตั้งสีรอง(Secondary)
- เลือกสีพื้นหลังพื้นผิว(Surface background)
- การปรับขนาด(Scaling) มีดังนี้ ฟอนต์/ตัวอักษร(Font) , องค์ประกอบ UI (UI elements)

---
  </div>
</div>

### 1.4 แถบ Preview
ในหน้านี้จะเป็นการแสดงหน้าแบบฟอร์มที่เราออกแบบไว้

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form45.png" alt="คำอธิบายรูป" width="700" />
</div>

---
### 1.5 แถบ Theme
ต่อมาในแถบ Theme จะอธิบายเพิ่มเติมในส่วนของเครื่องมือที่อยู่ทางด้านขวาของจอ ดังนี้

<div style={{ textAlign: 'center', margin: '15px 0' }}>
  <img src="/img/create-form/create-form46.png" alt="คำอธิบายรูป" width="700" />
</div>

---

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '25px' }}>

{/* ส่วนที่ 1: รูปภาพด้านซ้าย */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', flex: '0 0 auto' }}>
    
    <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
      <img src="/img/create-form/create-form47.png" alt="Sidebar Tools 1" width="60" />
    </div>

  </div>


  {/* ส่วนที่ 2: เนื้อหาด้านขวา */}
  <div style={{ flex: '1' }}>

**เครื่องมือ Show Panel**

<div style={{ textAlign: 'left', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form34.png" alt="คำอธิบายรูป" width="70" />
</div>

ถ้ากดปุ่มนี้จะเป็นการซ่อน/ขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดเพิ่มเติม

---

**เครื่องมือ General ใน Theme Settings :**
เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของส่วนทั่วไปโดยในหน้านี้จะอธิบายส่วนของการกำหนดเลือกธีม(Theme)

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form48.png" alt="คำอธิบายรูป" width="300" />
</div>

---

**เครื่องมือ Header ใน Theme Settings :**
เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของส่วนหัว

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form48.png" alt="คำอธิบายรูป" width="300" />
</div>

**รายละเอียดใน Panel ของ Header ใน Theme Settings**
- การตั้งมุมมอง(View) มีให้ปรับ 2 แบบ ดังนี้ แบบพื้นฐาน(Basic) , แบบขั้นสูง(Advanced) 

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form49.png" alt="คำอธิบายรูป" width="300" />
</div>

<br />

**เพิ่มเติมในการตั้งแบบขั้นสูง**
- กำหนดความสูง(Height)
- กำหนดความสูงบนสมาร์ทโฟน(Height on smartphone)
- กำหนดความกว้างของพื้นที่เนื้อหา(Content area width) มีตัวเลือก 2 แบบ ได้แก่ เหมือนกับแบบสำรวจ(Same as survey) , เหมือนกับคอนเทนเนอร์(Same as container)
- กำหนดความกว้างของข้อความ(Text width)
- กำหนดสีพื้นหลัง(Background color) มี 3 ตัวเลือก ได้แก่ ไม่มี(None) , สีเน้น(Accent color) , กำหนดเอง(Custom)
- เลือกไฟล์หรือวางลิงก์ไฟล์ตั้งภาพพื้นหลัง(Background image)
- กำหนดทับซ้อนกัน(Overlap)
- การปรับแบบอักษรสำหรับหัวแบบสำรวจ(Survey title font) เช่น เลือกฟอนต์ , เลือกความหนา/สี/ขนาดฟอนต์
- การปรับแบบอักษรคำอธิบายแบบสำรอง(Survey description font) เช่น เลือกฟอนต์ , เลือกความหนา/สี/ขนาดฟอนต์
- การจัดวางโลโก้(Logo alignment) เช่น กำหนดตำแหน่งแนวนอน/แนวตั้ง
- การจัดเรียงชื่อแบบสำรวจ(Survey description alignment) เช่น กำหนดตำแหน่งแนวนอน/แนวตั้ง

---
**เครื่องมือ Background ใน Theme Settings :**
เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของส่วนพื้นหลัง

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form50.png" alt="คำอธิบายรูป" width="300" />
</div>

**รายละเอียดใน Panel ของ Background ใน Theme Settings**
- การกำหนดสีพื้นหลัง(Background color)
- การเลือกไฟล์หรือวางลิงก์ไฟล์ภาพพื้นหลัง(Background image)
---

**เครื่องมือ Appearance ใน Theme Settings :**
เป็นการเปิดขยายส่วนของ Panel ที่เป็นส่วนแก้ไขรายละเอียดของรูปร่าง

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form51.png" alt="คำอธิบายรูป" width="300" />
</div>

**รายละเอียดใน Panel ของ Appearance ใน Theme Settings**
- การกำหนดสีเน้น(Accent color)
- ความทึบของแผงและกล่องคำถาม(Panel and question box opacity)
- ความทึบขององค์ประกอบอินพุต(Input element opacity)
- ตระกูลแบบอักษรแบบฟอร์ม(Survey font family)
- ขนาดตัวอักษรแบบฟอร์ม(Survey font size)
- ปัจจัยมาตราส่วนแบบฟอร์ม(Survey scale factor)
- มุมรัศมี(Corner radius)
- การกำหนดแบบขั้นสูง(Advanced mode) 
 </div>
</div>

---

### 1.6 แถบ Logic
คือส่วนที่ใช้กำหนด **"เงื่อนไข"** ให้กับแบบฟอร์ม เป็นการใช้สร้างกฎเพื่อควบคุมเส้นทางของคนตอบ

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form52.png" alt="คำอธิบายรูป" width="700" />
</div>

**ตัวอย่างการใช้ในส่วนของ logic**

จากตัวอย่างกำหนดว่าผู้ใช้ต้องการที่จะ**สร้างแบบทดสอบวัดระดับหรือคัดกรองสุขภาพ**
โดยมีการใช้ Logic เพื่อคัดกรองความเสี่ยงตามอาการที่พบ
- **คำถามหลัก :** "ท่านมีอาการไข้สูงเกิน 38°C หรือไม่?" (ใช่/ไม่ใช่)
  - กำหนด Logic (ถ้าตอบ **"ใช่"**) : ระบบจะแสดงรายการอาการเพิ่มเติม เช่น ไอ, เจ็บคอ, หรือสูญเสียการรับรส
  - กำหนด Logic (ถ้าตอบ **"ไม่ใช่"**) : ระบบจะข้ามไปยังกลุ่มคำถามเกี่ยวกับพฤติกรรมการใช้ชีวิตทั่วไปแทน

<br />

**ขั้นตอนการดำเนินการ**
1. สร้างแบบฟอร์มคำถาม ทั้งหมด 3 ส่วน ได้แก่ 
    - หน้าแรก คือหน้าแสดงคำถามอาการว่าผู้ตอบมีไข้สูงเกิน 38°C หรือไม่?
    - หน้าที่สอง คือหน้าสำหรับแสดงรายการอาการเพิ่มเติม เช่น ไอ, เจ็บคอ, หรือสูญเสียการรับรส
    - หน้าที่สาม คือหน้าสำหรับแสดงกลุ่มคำถามเกี่ยวกับพฤติกรรมการใช้ชีวิตทั่วไป
2. พอสร้างคำถามเรียบร้อยแล้วผู้ใช้สามารถ **กำหนดตัวแปร** สำหรับไว้ใช้ในส่วนของ logic ได้ที่แถบด้านข้างของแต่ละคำถาม **ตรงช่อง Question name**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic02.png" alt="คำอธิบายรูป" width="700" />
</div>

3. เข้าไปในหน้าแถบ logic เพื่อเริ่มสร้างเงื่อนไขตามที่เราต้องการ
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic01.png" alt="คำอธิบายรูป" width="700" />
  <p>หากผู้ใช้ต้องการจะเริ่มสร้าง logic สามารถกดที่ปุ่มคำว่า Add New Rule </p>
</div>

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic03.png" alt="คำอธิบายรูป" width="700" />
  <p>เมื่อกดปุ่มเพิ่ม logic แล้วจะได้หน้าตาแบบนี้ ผู้ใช้สามารถเริ่มสร้าง logic ตามที่ต้องการได้เลย</p>
</div>

<br />

**ตัวอย่างการใช้ logic ของแบบทดสอบวัดระดับหรือคัดกรองสุขภาพ**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic04.png" alt="คำอธิบายรูป" width="700" />
</div>
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic05.png" alt="คำอธิบายรูป" width="600" />
</div>

**อธิบายส่วนเครื่องมือเพิ่มเติม**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic06.png" alt="คำอธิบายรูป" width="600" />
</div>

- หากผู้ใช้ต้องการที่จะลบ logic นั้นๆ สามารถทำได้โดยนำเมาส์ไปชี้ที่ส่วนหัวของ logic ที่ต้องการจะลบออก จากนนั้น**กดปุ่มลบสีแดง** <Trash2 size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> ที่อยู่ทางด้านขวาของ logic
- ถ้าผู้ใช้ต้องการจะซ่อนหรือขยายรายละเอียดของ logic สามารถทำได้โดยการนำเมาส์ไปชี้ที่ส่วนหัวของ logic ที่ต้องการ จากนั้น**กดปุ่มซ่อนหรือขยายสีม่วง** <ArrowDownUp size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> ที่อยู่ทางด้านซ้ายของ logic

4. หลังจากที่สร้างเงื่อนไข logic เรียบร้อยแล้ว ผู้ใช้สามารถ**กดดูที่แถบ Preview** เพื่อเป็นดูภาพรวมและลองใช้แบบฟอร์มว่า logic สามารถใช้งานได้จริงตรงตามความต้องการถูกต้องหรือไม่ ก่อนที่จะนำแบบฟอร์มออกไปเผยแพร่จริง
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/logic/logic07.png" alt="คำอธิบายรูป" width="700" />
</div>

---
### 1.7 แถบ JSON Editor
คือส่วนที่แสดงโครงสร้างเบื้องหลังของแบบฟอร์มในรูปแบบของ Code สำหรับผู้ใช้ที่ต้องการแก้ไขแบบฟอร์มในระดับเชิงลึก

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form53.png" alt="คำอธิบายรูป" width="700" />
</div>

---

## ส่วนที่ 2 ผู้จัดการ
ในหน้านี้สามารถเพิ่มคนอื่นมาเป็นผู้จัดการร่วมกันกับเราได้โดยการกดปุ่มสีม่วงที่มีคำว่า **“เพิ่มผู้จัดการ”** ได้หลังจากกดปุ่มนี้แล้วสามารถพิมพ์ค้นหาด้วยรหัสพนักงานหรือชื่อ-นามสกุล และเลือกตำแหน่ง , สังกัด ในการเพิ่มคนนั้นมาเป็นผู้จัดการได้

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form54.png" alt="คำอธิบายรูป" width="700" />
</div>

- **รายละเอียดการเพิ่มผู้จัดการ**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form63.png" alt="คำอธิบายรูป" width="600" />
</div>

เมื่อผู้ใช้กดปุ่ม**เพิ่มผู้จัดการ**แล้ว จะมีแถบทางด้านขวาของจอขึ้นเป็นหน้าสำหรับเลือกคนที่ต้องการจะเพิ่มผู้จัดการของพนักงานในกฟภ.

<br />

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form60.png" alt="รูปที่ 1" style={{ width: '300px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form64.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>
ถ้าต้องการจะค้นหาบุคคลในการเพิ่มผู้จัดการแบบสำรวจที่เราต้องการ สามารถค้นหาได้ที่ตรงช่องค้นหาพนักงาน โดยการพิมพ์ รหัสพนักงานหรือชื่อ-นามสกุลลงไป และสามารถพิมพ์ตำแหน่ง และสังกัดของพนักงาน ได้ที่ช่องค้นหาด้านล่างต่อจากช่องค้นหาพนักงานได้

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form61.png" alt="รูปที่ 1" style={{ width: '200px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form65.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>
ต่อมาส่วนนี้คือผลการค้นหาที่แสดงขึ้นมา จากการพิมพ์ค้นหาพนักงาน ตำแหน่งและสังกัดนั้นๆ สามารถกดเลือกพนักงานที่ต้องการจะเพิ่มผู้จัดการแบบสำรวจได้ที่ช่องสี่เหลี่ยมด้านหน้าทางซ้ายของรูปรายการพนักงานได้ หรือจะกดเลือกทั้งหมดจากช่องด้านบนมุมขวา และส่วนด้านล่างสุดจะเป็นการแสดงรายชื่อพนักงานในหน้าต่างๆสามารถกดไปหน้าอื่นๆเพื่อดูรายชื่อพนักงานคนอื่นได้

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form66.png" alt="รูปที่ 1" style={{ width: '350px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form67.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>

ส่วนสุดท้ายหลังจากที่กดเลือกผู้ใช้ที่ต้องการจะเพิ่มผู้จัดการแบบสำรวจเรียบร้อยแล้ว สามารถกดบันทึกได้โดยการกดที่ปุ่มสีม่วง **"เพิ่ม ... ท่าน"** ทางด้านขวา หรือถ้าไม่ต้องการบันทึกให้กดที่ปุ่ม **"ยกเลิก"** ทางด้านซ้ายได้

<br />

- **ตัวอย่างหน้าผลลัพธ์หลังจากเพิ่มผู้จัดการเรียบร้อยแล้ว**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form68.png" alt="คำอธิบายรูป" width="700" />
</div>
จากในภาพหากเราเพิ่มผู้จัดการแบบสำรวจแล้ว จะขึ้นแสดงรายละเอียดข้อมูลของพนักงานของกฟภ.ที่เราทำการเพิ่มด้วย 

<br />

- **กรณีที่เราต้องการลบผู้จัดการที่เราเพิ่มมาออก** 
1. สามารถกดได้ที่ปุ่ม <Trash2 size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />  ที่มุมขวาสุดของจอเพื่อทำการลบผู้จัดการเป็นรายบุคคลออก 
2. กรณีมีผู้จัดการหลายคนแล้วต้องการที่จะลบผู้จัดการออกทั้งหมดสามารถกดที่ปุ่ม <Trash2 size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> คำว่า **ลบทั้งหมด** ข้างปุ่มเพิ่มผู้จัดการด้านบน เพื่อลบผู้จัดการออกทั้งหมด
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form69.png" alt="คำอธิบายรูป" width="700" />
</div>

---

## ส่วนที่ 3 การเผยแพร่
โดยกดไปที่ปุ่มคำว่า **การเผยแพร่** ในหน้าปรับปรุงแบบฟอร์ม หลังจากที่เราสร้างแบบฟอร์มเสร็จแล้ว แล้วต้องการที่จะเผยแพร่แบบฟอร์มของเรา

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form55.png" alt="คำอธิบายรูป" width="700" />
</div>

**อธิบายส่วนต่างๆในหน้าเผยแพร่แบบฟอร์ม**
- เริ่มต้นเผยแพร่ สามารถตั้งวันที่และเวลาในการเผยแพร่แบบฟอร์มนี้ได้
- สิ้นสุดเผยแพร่ นอกจากตั้งวันเผยแพร่ยังสามารถตั้งวันที่และเวลาสิ้นสุดเผยแพร่ในการจำกัดช่วงเวลาตอบแบบฟอร์มได้เช่นกัน
- ลักษณะการเผยแพร่ สามารถเลือกได้ว่าต้องการจะเผยแพร่แบบไหนต้องการให้ใครตอบแบบฟอร์มของเรา มี 2 ตัวเลือก ได้แก่ เผยแพร่ให้ภานใน กฟภ. , เผยแพร่แบบสาธารณะ

<br />

---

### 3.1 กรณีเลือกเผยแพร่แบบภายใน กฟภ.
 
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form56.png" alt="คำอธิบายรูป" width="700" />
</div>


<br />

- ผู้ทำแบบสำรวจสามารถกดปุ่มสีม่วง คำว่า **เพิ่มผู้ทำแบบสำรวจ เพื่อเจาะจงบุคคลของพนักงานในกฟภ.** ในการให้ทำแบบฟอร์มของเราได้
  - **รายละเอียดของการเพิ่มผู้ทำแบบสำรวจ**

<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form59.png" alt="คำอธิบายรูป" width="600" />
</div>

เมื่อผู้ใช้กดปุ่ม**เพิ่มผู้ทำแบบสำรวจ**แล้ว จะมีแถบทางด้านขวาของจอขึ้นเป็นหน้าสำหรับเลือกคนที่ต้องการจะเพิ่มผู้ทำแบบสำรวจของพนักงานในกฟภ.

<br />

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form60.png" alt="รูปที่ 1" style={{ width: '300px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form60-1.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>
ถ้าต้องการจะค้นหาผู้ทำแบบสำรวจที่เราต้องการ สามารถค้นหาได้ที่ตรงช่องค้นหาพนักงาน โดยการพิมพ์ รหัสพนักงานหรือชื่อ-นามสกุลลงไป และสามารถพิมพ์ตำแหน่ง และสังกัดของพนักงาน ได้ที่ช่องค้นหาด้านล่างต่อจากช่องค้นหาพนักงานได้

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form61.png" alt="รูปที่ 1" style={{ width: '200px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form61-1.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>
ต่อมาส่วนนี้คือผลการค้นหาที่แสดงขึ้นมา จากการพิมพ์ค้นหาพนักงาน ตำแหน่งและสังกัดนั้นๆ สามารถกดเลือกพนักงานที่ต้องการจะเพิ่มผู้ทำแบบสำรวจได้ที่ช่องสี่เหลี่ยมด้านหน้าทางซ้ายของรูปรายการพนักงานได้ หรือจะกดเลือกทั้งหมดจากช่องด้านบนมุมขวา และส่วนด้านล่างสุดจะเป็นการแสดงรายชื่อพนักงานในหน้าต่างๆสามารถกดไปหน้าอื่นๆเพื่อดูรายชื่อพนักงานคนอื่นได้

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', height: '400px' }}>
  <img src="/img/create-form/create-form62.png" alt="รูปที่ 1" style={{ width: '350px',objectFit: 'contain' }} />
  <img src="/img/create-form/create-form62-1.png" alt="รูปที่ 2" style={{ width: '550px', objectFit: 'contain' }} />
</div>

ส่วนสุดท้ายหลังจากที่กดเลือกผู้ใช้ที่ต้องการจะเพิ่มผู้ทำแบบสำรวจเรียบร้อยแล้ว สามารถกดบันทึกได้โดยการกดที่ปุ่มสีม่วง **"เพิ่ม ... คน"** ทางด้านขวา หรือถ้าไม่ต้องการบันทึกให้กดที่ปุ่ม **"ยกเลิก"** ทางด้านซ้ายได้

<br />

- **ตัวอย่างหน้าผลลัพธ์หลังจากเพิ่มผู้ทำแบบสำรวจเรียบร้อยแล้ว**
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form70.png" alt="คำอธิบายรูป" width="700" />
</div>
จากในภาพหากเราเพิ่มผู้ทำแบบสำรวจแล้ว จะขึ้นแสดงรายละเอียดข้อมูลของพนักงานของกฟภ.ที่เราทำการเพิ่มด้วย 

<br />

- **กรณีที่เราต้องการลบผู้ทำแบบสำรวจที่เราเพิ่มมาออก** 
1. สามารถกดได้ที่ปุ่ม <Trash2 size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />  ที่มุมขวาสุดของจอเพื่อทำการลบผู้ทำแบบสำรวจเป็นรายบุคคลออก 
2. กรณีมีผู้ทำแบบสำรวจหลายคนแล้วต้องการที่จะลบผู้ทำแบบสำรวจออกทั้งหมดสามารถกดที่ปุ่ม <Trash2 size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> คำว่า **ลบทั้งหมด** ข้างปุ่มเพิ่มผู้ทำแบบสำรวจด้านบน เพื่อลบผู้ทำแบบสำรวจออกทั้งหมด
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form71.png" alt="คำอธิบายรูป" width="700" />
</div>

<br />

- **การตั้งค่าแบบฟอร์มภายใน** สามารถเลือกได้ว่าจะอนุญาตให้ผู้ใช้สามารถกลับมาแก้ไขคำตอบได้ไหม
- **ข้อความปฎิเสธความรับผิดชอบ(Disclaimer)** ส่วนนี้ผู้ใช้สามารถกดอ่านเพิ่มเติมได้ โดยการกดที่ปุ่มลูกสรชี้ลงด้านล่าง


---

### 3.2 กรณีเลือกเผยแพร่แบบสาธารณะ
 
<div style={{ textAlign: 'center', marginBottom: '10px' }}>
  <img src="/img/create-form/create-form57.png" alt="คำอธิบายรูป" width="700" />
</div>

- **การตั้งค่าแบบฟอร์มสาธารณะ** สามารถกำหนดได้ว่าต้องการกำจัดจำนวนผู้ทำแบบสำรวจ , ต้องการให้ผู้ใช้เข้าสู่ระบบก่อนตอบไหม
- **ข้อความปฎิเสธความรับผิดชอบ(Disclaimer)** ส่วนนี้ผู้ใช้สามารถกดอ่านเพิ่มเติมได้ โดยการกดที่ปุ่มลูกสรชี้ลงด้านล่าง

<br />

เมื่อตรวจสอบความถูกต้องอะไรเรียบร้อยแล้ว สามารถกดที่ปุ่มสีม่วง คำว่า **บันทึกและเผยแพร่** หรือ **เปลี่ยนแปลงและเผยแพร่** เพื่อทำการเผยแพร่แบบฟอร์ม หรือกดเปลี่ยนเป็นฉบับร่างไว้ก่อนได้หากยังไม่พร้อมทำการเผยแพร่ในตอนนี้

---
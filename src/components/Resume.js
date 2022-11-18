import React from "react";

const Resume = () => {
  return (
    <>
      {/* <!-- ======= Resume Section ======= --> */}
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              Dari latar belakang jurusan saya yaitu Sarjana Komputer saya ingin meneruskan passion saya di bidang IT sebagai Front End Developer. Saya belum memiliki pengalaman kerja di bidang Frontend web tapi saya memiliki kemampuan
              fundamental seperti HTML, CSS, Javascript. Saya juga melengkapi diri saya dengan belajar lewat bootcamp dan otodidak agar lebih memahami tentang Front End Developer.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Work Experience</h3>
              <div className="resume-item">
                <h4>Operator / IT Support</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Direktorat Binmas Polda Sulut</em>
                </p>
                <span>
                  <ul>
                    <li>Troubleshooting & Maintenance, Hardware, Software dan Jaringan</li>
                    <li>Mengkompulir Data Binmas Dari Mabes Polri dan Wilayah Polda Sulut</li>
                    <li>Membuat Surat Telegram, Sprin, Nota Dinas ke wilayah atau ke Mabes Polri</li>
                  </ul>
                </span>
              </div>
              <div className="resume-item">
                <h4>PIC / Team Leader Mitra Telkom</h4>
                <h5>2019 - 2020</h5>
                <p>
                  <em>Pater Noster mitra Telkom Akses</em>
                </p>
                <span>
                  <ul>
                    <li>Mengontrol jalannya pekerjaan dan proyek sesuai rencana</li>
                    <li>Mengkompulir dan membuat laporan tentang pemasangan jaringan, migrasi jaringan, dan gangguan jaringan ke manager</li>
                  </ul>
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Sistem Informasi</h4>
                <h5>2015 - 2019</h5>
                <p>
                  <em>STMIK Parnaraya Manado</em>
                </p>
                <p>Focus untuk pembelajaran Programmer, Web Developer, Database Administration, Analisis Data, IT Trainer, Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Resume Section --> */}
    </>
  );
};

export default Resume;

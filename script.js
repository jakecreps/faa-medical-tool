// Navigation
function showStep(stepId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
  }
  
  function nextStep(nextId) {
    if (nextId === 'summary') fillSummary();
    showStep(nextId);
  }
  
  // Summary
  function fillSummary() {
    document.getElementById('summaryName').innerText = document.getElementById('pilotName').value || 'Not provided';
    document.getElementById('summaryHours').innerText = document.getElementById('flightHours').value || 'Not provided';
    document.getElementById('summaryCert').innerText = document.getElementById('certClass').value + ' Class';
  }
  
  // Medications
  function evaluateMedications() {
    const flags = [];
    if (document.getElementById('ssri').value === 'yes') {
      flags.push("⚠️ SSRI use is restricted and requires Special Issuance under strict FAA protocol.");
    }
    if (document.getElementById('insulin').value === 'yes') {
      flags.push("⚠️ Insulin use is only allowed under specific monitoring protocols.");
    }
    if (document.getElementById('bloodThinner').value === 'yes') {
      flags.push("⚠️ Blood thinner use requires regular INR monitoring and specialist documentation.");
    }
    if (document.getElementById('benzos').value === 'yes') {
      flags.push("❌ Benzodiazepines are typically disqualifying unless exceptional circumstances are documented.");
    }
    const output = flags.map(f => `<div class='flag'>${f}</div>`).join('');
    document.getElementById('medFlags').innerHTML = output;
    document.getElementById('finalFlags').innerHTML = output;
  }
  
  // Condition listeners
  document.getElementById('afib')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('chd')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('valve')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('pat')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('pacemaker')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('hypertension')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('tachycardia')?.addEventListener('change', evaluateCardioConditions);
  document.getElementById('thrombo')?.addEventListener('change', evaluateCardioConditions);

  
  function evaluateCardioConditions() {
    evaluateAFib();
    evaluateCHD();
    evaluateValve();
    evaluatePAT();
    evaluatePacemaker();
    evaluateHypertension();
    evaluateTachycardia();
    evaluateThrombo();
  }
  
  // AFib
  function evaluateAFib() {
    const afib = document.getElementById('afib');
    const afibInfo = document.getElementById('afib-info');
    afibInfo.innerHTML = "";
    if (!afib.checked) return;
  
    afibInfo.innerHTML = `
      <div class="medical-guidance">
        <label>⏳ Have you undergone ablation treatment?</label>
        <select id="afib-ablation">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="afib-wait"></div>
      </div>
    `;
  
    document.getElementById('afib-ablation').addEventListener('change', function () {
      const waitDiv = document.getElementById('afib-wait');
      waitDiv.innerHTML = "";
      if (this.value === 'yes') {
        waitDiv.innerHTML = `
          <label>⏳ Has it been at least 3 months since your ablation?</label>
          <select id="afib-3mo">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="afib-followup"></div>
        `;
        document.getElementById('afib-3mo').addEventListener('change', showAfibChecklist);
      } else {
        waitDiv.innerHTML = `
          <label>💡 Did you undergo cardioversion instead?</label>
          <select id="afib-cv">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="afib-cv-wait"></div>
        `;
        document.getElementById('afib-cv').addEventListener('change', function () {
          const cvWait = document.getElementById('afib-cv-wait');
          if (this.value === 'yes') {
            cvWait.innerHTML = `
              <label>⏳ Has it been at least 1 month since cardioversion?</label>
              <select id="afib-1mo">
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div id="afib-followup"></div>
            `;
            document.getElementById('afib-1mo').addEventListener('change', showAfibChecklist);
          } else {
            cvWait.innerHTML = `<div class="status-container status-flag">⚠️ FAA decision required for recent diagnosis or incomplete treatment.</div>`;
          }
        });
      }
    });
  }
  
  function showAfibChecklist(e) {
    const div = document.getElementById('afib-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ You are past the required wait period.<br><br>
            <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiologist clinical notes</li>
            <li>24-hour cardiac monitor (within 90 days)</li>
            <li>TSH and sleep study</li>
          </ul>
          ⚠️ FAA Special Issuance still required.
        </div>
      `;
    } else {
      div.innerHTML = `<div class="status-container status-flag">⏳ Mandatory wait not met. Delay submission.</div>`;
    }
  }
  
  // CHD
  function evaluateCHD() {
    const chd = document.getElementById('chd');
    const chdInfo = document.getElementById('chd-info');
    chdInfo.innerHTML = "";
    if (!chd.checked) return;
  
    chdInfo.innerHTML = `
      <div class="medical-guidance">
        <label>🕒 Have you had Coronary Artery Bypass Grafting (CABG)?</label>
        <select id="cabg">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="cabg-wait"></div>
      </div>
    `;
  
    document.getElementById('cabg').addEventListener('change', function () {
      const waitDiv = document.getElementById('cabg-wait');
      waitDiv.innerHTML = "";
      if (this.value === 'yes') {
        waitDiv.innerHTML = `
          <label>⏳ Has it been at least 6 months since the CABG?</label>
          <select id="cabg-6mo">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="chd-followup"></div>
        `;
        document.getElementById('cabg-6mo').addEventListener('change', showChdChecklist);
      } else {
        waitDiv.innerHTML = `
          <label>🩺 Have you had a heart attack (MI) or received any stents?</label>
          <select id="stents">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="stents-wait"></div>
        `;
        document.getElementById('stents').addEventListener('change', function () {
          const stentsDiv = document.getElementById('stents-wait');
          if (this.value === 'yes') {
            stentsDiv.innerHTML = `
              <label>⏳ Has it been at least 3 months since the MI or stents?</label>
              <select id="stents-3mo">
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div id="chd-followup"></div>
            `;
            document.getElementById('stents-3mo').addEventListener('change', showChdChecklist);
          } else {
            stentsDiv.innerHTML = `<div class="status-container status-flag">⚠️ FAA review still required. Consult your AME.</div>`;
          }
        });
      }
    });
  }
  
  function showChdChecklist(e) {
    const div = document.getElementById('chd-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ You meet the FAA recovery time.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiologist evaluation</li>
            <li>Radionuclide stress test</li>
            <li>Cardiac cath and discharge report</li>
            <li>Lipids, A1c, INR (if on warfarin)</li>
          </ul>
          ⚠️ FAA Special Issuance still required.
        </div>
      `;
    } else {
      div.innerHTML = `<div class="status-container status-flag">⏳ Mandatory recovery period not met. Please delay submission.</div>`;
    }
  }
  
  // Valve
  function evaluateValve() {
    const valve = document.getElementById('valve');
    const valveInfo = document.getElementById('valve-info');
    valveInfo.innerHTML = "";
    if (!valve.checked) return;
  
    valveInfo.innerHTML = `
      <div class="medical-guidance">
        <label>🫀 Have you had valve replacement or repair surgery?</label>
        <select id="valve-surgery">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="valve-wait"></div>
      </div>
    `;
  
    document.getElementById('valve-surgery').addEventListener('change', function () {
      const waitDiv = document.getElementById('valve-wait');
      waitDiv.innerHTML = "";
      if (this.value === 'yes') {
        waitDiv.innerHTML = `
          <label>⏳ Has it been at least 6 months since your valve procedure?</label>
          <select id="valve-6mo">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="valve-followup"></div>
        `;
        document.getElementById('valve-6mo').addEventListener('change', showValveChecklist);
      } else {
        waitDiv.innerHTML = `
          <label>📋 Is the condition currently being treated or monitored?</label>
          <select id="valve-monitoring">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="valve-followup"></div>
        `;
        document.getElementById('valve-monitoring').addEventListener('change', showValveChecklist);
      }
    });
  }
  
  function showValveChecklist(e) {
    const div = document.getElementById('valve-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ FAA review may proceed.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiologist evaluation</li>
            <li>Recent echocardiogram (within 90 days)</li>
            <li>Surgical report (if applicable)</li>
            <li>INR monitoring (if on anticoagulants)</li>
          </ul>
        </div>
      `;
    } else {
      div.innerHTML = `<div class="status-container status-flag">⏳ Not eligible for review at this time. Continue monitoring and treatment.</div>`;
    }
  }
  
  // PAT
  function evaluatePAT() {
    const pat = document.getElementById('pat');
    const patInfo = document.getElementById('pat-info');
    patInfo.innerHTML = "";
    if (!pat.checked) return;
  
    patInfo.innerHTML = `
      <div class="medical-guidance">
        <label>💓 Have you experienced any symptoms (palpitations, dizziness, syncope)?</label>
        <select id="pat-symptoms">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="pat-followup"></div>
      </div>
    `;
  
    document.getElementById('pat-symptoms').addEventListener('change', showPatChecklist);
  }
  
  function showPatChecklist(e) {
    const div = document.getElementById('pat-followup');
    if (e.target.value === 'no') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ Asymptomatic PAT may be cleared.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiologist evaluation</li>
            <li>Holter or event monitor (within 90 days)</li>
          </ul>
          ⚠️ FAA may request periodic follow-up.
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="status-container status-flag">
          ⚠️ Symptomatic PAT requires full FAA cardiology review.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiologist notes</li>
            <li>Holter monitor</li>
            <li>Stress test (if indicated)</li>
          </ul>
        </div>
      `;
    }
  }
  
  // Pacemaker
  function evaluatePacemaker() {
    const pacer = document.getElementById('pacemaker');
    const pacerInfo = document.getElementById('pacemaker-info');
    pacerInfo.innerHTML = "";
    if (!pacer.checked) return;
  
    pacerInfo.innerHTML = `
      <div class="medical-guidance">
        <label>⚡ Have you had the device implanted for at least 2 months?</label>
        <select id="pacer-2mo">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="pacer-followup"></div>
      </div>
    `;
  
    document.getElementById('pacer-2mo').addEventListener('change', showPacerChecklist);
  }
  
  function showPacerChecklist(e) {
    const div = document.getElementById('pacer-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ Eligible for FAA Special Issuance review.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Device operative report</li>
            <li>Recent device interrogation (within 90 days)</li>
            <li>Cardiologist evaluation and diagnosis</li>
            <li>Manufacturer and model info</li>
          </ul>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="status-container status-flag">
          ⏳ Wait at least 2 months post-implant before applying for certification.
        </div>
      `;
    }
  }

// Hypertension
function evaluateHypertension() {
    const htn = document.getElementById('hypertension');
    const htnInfo = document.getElementById('hypertension-info');
    htnInfo.innerHTML = "";
    if (!htn.checked) return;
  
    htnInfo.innerHTML = `
      <div class="medical-guidance">
        <label>💊 Is your blood pressure currently controlled with medication?</label>
        <select id="htn-controlled">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="htn-followup"></div>
      </div>
    `;
  
    document.getElementById('htn-controlled').addEventListener('change', showHypertensionChecklist);
  }
  
  function showHypertensionChecklist(e) {
    const div = document.getElementById('htn-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ Controlled hypertension can be certified with FAA approval.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Current blood pressure readings (multiple, recent)</li>
            <li>Clinical status from treating physician</li>
            <li>Medication list and dosage</li>
          </ul>
          ⚠️ FAA may request additional labs or follow-up depending on history.
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="status-container status-flag">
          ⛔ Uncontrolled hypertension is not eligible for certification.<br><br>
          Please consult your physician for treatment before reapplying.
        </div>
      `;
    }
  }

// Tachycardia
function evaluateTachycardia() {
    const tachy = document.getElementById('tachycardia');
    const tachyInfo = document.getElementById('tachycardia-info');
    tachyInfo.innerHTML = "";
    if (!tachy.checked) return;
  
    tachyInfo.innerHTML = `
      <div class="medical-guidance">
        <label>📈 Have you been evaluated by a cardiologist?</label>
        <select id="tachy-eval">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="tachy-followup"></div>
      </div>
    `;
  
    document.getElementById('tachy-eval').addEventListener('change', showTachycardiaChecklist);
  }
  
  function showTachycardiaChecklist(e) {
    const div = document.getElementById('tachy-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ You may proceed with FAA review.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Cardiology consultation and diagnosis</li>
            <li>Holter or event monitor results</li>
            <li>Any treatment notes (medications, ablation, etc.)</li>
          </ul>
          ⚠️ FAA Special Issuance may apply depending on type and frequency of tachycardia.
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="status-container status-flag">
          ⛔ FAA certification cannot proceed until cardiology evaluation is complete.
        </div>
      `;
    }
  }
    
// Thromboembolic Disease (DVT, PE)
function evaluateThrombo() {
    const thrombo = document.getElementById('thrombo');
    const thromboInfo = document.getElementById('thrombo-info');
    thromboInfo.innerHTML = "";
    if (!thrombo.checked) return;
  
    thromboInfo.innerHTML = `
      <div class="medical-guidance">
        <label>🩸 Are you currently taking anticoagulant medication (e.g. warfarin, DOAC)?</label>
        <select id="thrombo-anticoag">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div id="thrombo-followup"></div>
      </div>
    `;
  
    document.getElementById('thrombo-anticoag').addEventListener('change', showThromboChecklist);
  }
  
  function showThromboChecklist(e) {
    const div = document.getElementById('thrombo-followup');
    if (e.target.value === 'yes') {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ Anticoagulant use is permitted under FAA review.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Hematologist or physician statement of stability</li>
            <li>INR monitoring records (if on warfarin)</li>
            <li>Clearance of symptoms and complications (e.g. post-thrombotic syndrome)</li>
          </ul>
          ⚠️ FAA may require periodic follow-up and monitoring data.
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="status-container status-ok">
          ✅ If no anticoagulants are required, FAA may approve with limited review.<br><br>
          <strong>📋 Required Documentation:</strong>
          <ul>
            <li>Physician note indicating resolved clot</li>
            <li>Imaging or history summary (if available)</li>
          </ul>
        </div>
      `;
    }
  }
    
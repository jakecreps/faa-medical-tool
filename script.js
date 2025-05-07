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
    document.getElementById('lowtestosterone')?.addEventListener('change', evaluateEndocrineConditions);
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
  document.getElementById('stroke')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('seizure')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('migraine')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('nf1')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('ms')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('tbi')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('parkinsons')?.addEventListener('change', evaluateNeuroConditions);
  document.getElementById('depression')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('bipolar')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('adhd')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('schizophrenia')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('personality')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('ptsd')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('ssri-history')?.addEventListener('change', evaluatePsychConditions);
  document.getElementById('diabetes')?.addEventListener('change', evaluateEndocrineConditions);
  document.getElementById('hypothyroidism')?.addEventListener('change', evaluateEndocrineConditions);
  document.getElementById('hyperthyroidism')?.addEventListener('change', evaluateEndocrineConditions);
  document.getElementById('obesity')?.addEventListener('change', evaluateEndocrineConditions);
  document.getElementById('prediabetes')?.addEventListener('change', evaluateEndocrineConditions);
  document.getElementById('lowtestosterone')?.addEventListener('change', evaluateEndocrineConditions);

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

  function evaluateNeuroConditions() {
    evaluateStroke();
    evaluateSeizure();
    evaluateMigraine();
    evaluateNF1();
    evaluateMS();
    evaluateTBI();
    evaluateParkinsons();
  }

  function evaluatePsychConditions() {
    evaluateDepression();
    evaluateBipolar();
    evaluateADHD();
    evaluateSchizophrenia();
    evaluatePersonality();
    evaluatePTSD();
    evaluateSSRIHistory();
  }  

  function evaluateEndocrineConditions() {
    evaluateDiabetes();
    evaluateHypothyroidism();
    evaluateHyperthyroidism();
    evaluateObesity(); 
    evaluatePrediabetes();
    evaluateLowTestosterone();
  }

  function evaluateAllConditions() {
    evaluateCardioConditions();
    evaluateNeuroConditions();
    evaluatePsychConditions();
    evaluateEndocrineConditions();
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

// Stroke (CVA)
function evaluateStroke() {
  const stroke = document.getElementById('stroke');
  const strokeInfo = document.getElementById('stroke-info');
  strokeInfo.innerHTML = "";
  if (!stroke.checked) return;

  strokeInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Was the stroke caused by a clot (ischemic) or a bleed (hemorrhagic)?</label>
      <select id="stroke-type">
        <option value="">-- Select --</option>
        <option value="ischemic">Ischemic (clot)</option>
        <option value="hemorrhagic">Hemorrhagic (bleed)</option>
        <option value="unknown">Not sure</option>
      </select>
      <div id="stroke-followup"></div>
    </div>
  `;

  document.getElementById('stroke-type').addEventListener('change', showStrokeChecklist);
}

function showStrokeChecklist(e) {
  const type = e.target.value;
  const div = document.getElementById('stroke-followup');

  if (type === "ischemic" || type === "hemorrhagic") {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA review is required for any cerebrovascular accident (CVA).<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist evaluation</li>
          <li>Neuroimaging results (MRI/CT)</li>
          <li>Current cognitive and motor status</li>
          <li>Any follow-up rehabilitation summary</li>
        </ul>
        ⚠️ FAA typically defers initial certification for at least 6 months post-event.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Please consult with your neurologist and identify the stroke type. FAA will require documentation either way.
      </div>
    `;
  }
}

// Seizure Disorder / Epilepsy
function evaluateSeizure() {
  const seizure = document.getElementById('seizure');
  const seizureInfo = document.getElementById('seizure-info');
  seizureInfo.innerHTML = "";
  if (!seizure.checked) return;

  seizureInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Have you been seizure-free for at least 10 years, and off anti-seizure meds?</label>
      <select id="seizure-free">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="seizure-followup"></div>
    </div>
  `;

  document.getElementById('seizure-free').addEventListener('change', showSeizureChecklist);
}

function showSeizureChecklist(e) {
  const div = document.getElementById('seizure-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ May be eligible for FAA review under Special Issuance protocols.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist statement confirming seizure-free status ≥10 years</li>
          <li>Documentation that no anti-seizure medications are in use</li>
          <li>Normal neurologic exam</li>
          <li>EEG and imaging reports (if available)</li>
        </ul>
        ⚠️ FAA still makes case-by-case decisions.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ FAA will not issue a medical certificate unless seizure-free ≥10 years and off medications. Delay submission.
      </div>
    `;
  }
}

// Migraine
function evaluateMigraine() {
  const migraine = document.getElementById('migraine');
  const migraineInfo = document.getElementById('migraine-info');
  migraineInfo.innerHTML = "";
  if (!migraine.checked) return;

  migraineInfo.innerHTML = `
    <div class="medical-guidance">
      <label>💥 Do your migraines cause visual disturbances, confusion, or neurological symptoms?</label>
      <select id="migraine-symptoms">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="migraine-followup"></div>
    </div>
  `;

  document.getElementById('migraine-symptoms').addEventListener('change', showMigraineChecklist);
}

function showMigraineChecklist(e) {
  const div = document.getElementById('migraine-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Simple migraines with no neurologic impact may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Clinical notes from treating provider</li>
          <li>Frequency and severity description</li>
          <li>Medication list</li>
        </ul>
        ⚠️ FAA may require periodic status updates.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Complex migraines with aura or neurologic symptoms require detailed FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist evaluation</li>
          <li>EEG or imaging if performed</li>
          <li>Impact on flight performance and history</li>
        </ul>
      </div>
    `;
  }
}

// Neurofibromatosis Type 1 (NF1)
function evaluateNF1() {
  const nf1 = document.getElementById('nf1');
  const nf1Info = document.getElementById('nf1-info');
  nf1Info.innerHTML = "";
  if (!nf1.checked) return;

  nf1Info.innerHTML = `
    <div class="medical-guidance">
      <label>🧬 Have any tumors or lesions affected your vision, brain, or spine?</label>
      <select id="nf1-impact">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="nf1-followup"></div>
    </div>
  `;

  document.getElementById('nf1-impact').addEventListener('change', showNF1Checklist);
}

function showNF1Checklist(e) {
  const div = document.getElementById('nf1-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may approve if there are no functional neurological or visual impairments.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Clinical summary from neurologist or geneticist</li>
          <li>Confirmation of no CNS involvement or deficits</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ CNS or visual involvement requires FAA case-by-case review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist evaluation</li>
          <li>MRI or imaging results</li>
          <li>Functional assessment and treatment plan</li>
        </ul>
      </div>
    `;
  }
}

// Multiple Sclerosis (MS)
function evaluateMS() {
  const ms = document.getElementById('ms');
  const msInfo = document.getElementById('ms-info');
  msInfo.innerHTML = "";
  if (!ms.checked) return;

  msInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Are you currently experiencing any neurologic symptoms affecting motor, vision, or cognition?</label>
      <select id="ms-symptoms">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="ms-followup"></div>
    </div>
  `;

  document.getElementById('ms-symptoms').addEventListener('change', showMSChecklist);
}

function showMSChecklist(e) {
  const div = document.getElementById('ms-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Asymptomatic MS with stable imaging may be certifiable under FAA Special Issuance.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist report confirming stability</li>
          <li>Recent MRI (brain and spinal cord)</li>
          <li>Neurologic exam with no functional deficits</li>
        </ul>
        ⚠️ FAA will review history and imaging before issuing.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active neurologic symptoms require FAA review and likely deferral.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist assessment</li>
          <li>Detailed MRI and symptom history</li>
          <li>Functional evaluation for vision, mobility, and cognition</li>
        </ul>
      </div>
    `;
  }
}

// Traumatic Brain Injury (TBI)
function evaluateTBI() {
  const tbi = document.getElementById('tbi');
  const tbiInfo = document.getElementById('tbi-info');
  tbiInfo.innerHTML = "";
  if (!tbi.checked) return;

  tbiInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Was your TBI classified as mild, moderate, or severe?</label>
      <select id="tbi-type">
        <option value="">-- Select --</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <div id="tbi-followup"></div>
    </div>
  `;

  document.getElementById('tbi-type').addEventListener('change', showTBIChecklist);
}

function showTBIChecklist(e) {
  const type = e.target.value;
  const div = document.getElementById('tbi-followup');

  if (type === "mild") {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Mild TBI (no loss of consciousness >30 min, no skull fracture) may be certifiable after recovery.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist or neuropsych evaluation</li>
          <li>Normal CT or MRI scan (if done)</li>
          <li>No residual cognitive or behavioral symptoms</li>
        </ul>
        ⚠️ FAA may require cognitive testing depending on history.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Moderate to severe TBI requires full FAA neurologic and cognitive review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist and neuropsychologist evaluations</li>
          <li>MRI or CT scan results</li>
          <li>Cognitive testing results (e.g. CogScreen)</li>
          <li>Recovery timeline and treatment history</li>
        </ul>
      </div>
    `;
  }
}

// Parkinson’s Disease
function evaluateParkinsons() {
  const pd = document.getElementById('parkinsons');
  const pdInfo = document.getElementById('parkinsons-info');
  pdInfo.innerHTML = "";
  if (!pd.checked) return;

  pdInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Are your motor or cognitive symptoms currently well-controlled with treatment?</label>
      <select id="pd-controlled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="pd-followup"></div>
    </div>
  `;

  document.getElementById('pd-controlled').addEventListener('change', showParkinsonsChecklist);
}

function showParkinsonsChecklist(e) {
  const div = document.getElementById('pd-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may consider certification under Special Issuance for well-controlled cases.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist evaluation with functional status</li>
          <li>Neuropsychological testing</li>
          <li>Medication list and effectiveness</li>
          <li>MRI (if available)</li>
        </ul>
        ⚠️ Ongoing monitoring will be required.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ If symptoms significantly affect coordination or cognition, FAA will likely defer or deny certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurologist report</li>
          <li>Functional and cognitive status evaluation</li>
          <li>History of progression and current treatment</li>
        </ul>
      </div>
    `;
  }
}

// Depression / Anxiety
function evaluateDepression() {
  const dep = document.getElementById('depression');
  const depInfo = document.getElementById('depression-info');
  depInfo.innerHTML = "";
  if (!dep.checked) return;

  depInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Are you currently taking medication for depression or anxiety?</label>
      <select id="depression-meds">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="depression-followup"></div>
    </div>
  `;

  document.getElementById('depression-meds').addEventListener('change', showDepressionChecklist);
}

function showDepressionChecklist(e) {
  const div = document.getElementById('depression-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Mild, resolved depression or anxiety without medication may be cleared.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current mental health status from treating provider</li>
          <li>History of symptoms and resolution</li>
        </ul>
        ⚠️ FAA may request further psychiatric evaluation based on history.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active treatment with medication requires FAA Special Issuance review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Psychiatric evaluation</li>
          <li>Medication list, dosage, and side effect profile</li>
          <li>Mental health history and current stability assessment</li>
        </ul>
      </div>
    `;
  }
}

// Bipolar Disorder
function evaluateBipolar() {
  const bp = document.getElementById('bipolar');
  const bpInfo = document.getElementById('bipolar-info');
  bpInfo.innerHTML = "";
  if (!bp.checked) return;

  bpInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🔍 Have you been stable for at least 2 years with no hospitalizations or medication changes?</label>
      <select id="bipolar-stable">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="bipolar-followup"></div>
    </div>
  `;

  document.getElementById('bipolar-stable').addEventListener('change', showBipolarChecklist);
}

function showBipolarChecklist(e) {
  const div = document.getElementById('bipolar-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Bipolar Disorder is considered a disqualifying condition by the FAA in most cases.<br><br>
        <strong>📋 Required Documentation (for Special Issuance consideration):</strong>
        <ul>
          <li>Comprehensive psychiatric evaluation</li>
          <li>Medication records and stability timeline</li>
          <li>Neurocognitive testing (CogScreen-AE)</li>
          <li>No hospitalizations or episodes in ≥2 years</li>
        </ul>
        ❗ FAA decision is case-by-case and usually deferred.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ FAA will not certify pilots with recent bipolar episodes or instability.<br><br>
        You must demonstrate long-term control and undergo psychiatric review.
      </div>
    `;
  }
}

// ADHD / ADD
function evaluateADHD() {
  const adhd = document.getElementById('adhd');
  const adhdInfo = document.getElementById('adhd-info');
  adhdInfo.innerHTML = "";
  if (!adhd.checked) return;

  adhdInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Are you currently taking any medication for ADHD?</label>
      <select id="adhd-meds">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="adhd-followup"></div>
    </div>
  `;

  document.getElementById('adhd-meds').addEventListener('change', showADHDChecklist);
}

function showADHDChecklist(e) {
  const div = document.getElementById('adhd-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may consider certification if off meds and asymptomatic.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Detailed clinical history</li>
          <liPsychiatric or neuropsych evaluation</li>
          <li>Evidence of stable functioning (e.g. education, work)</li>
        </ul>
        ⚠️ FAA may still require CogScreen or additional testing.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active use of ADHD medication (e.g., stimulants) requires FAA Special Issuance.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current psychiatric evaluation</li>
          <li>CogScreen-AE neurocognitive testing</li>
          <li>Stability and performance verification</li>
        </ul>
        ❗ FAA decisions are case-by-case and often deferred.
      </div>
    `;
  }
}

// Schizophrenia
function evaluateSchizophrenia() {
  const sz = document.getElementById('schizophrenia');
  const szInfo = document.getElementById('schizophrenia-info');
  szInfo.innerHTML = "";
  if (!sz.checked) return;

  szInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Have you had any symptoms (delusions, hallucinations, disorganized thinking) in the last 5 years?</label>
      <select id="schizo-symptoms">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="schizophrenia-followup"></div>
    </div>
  `;

  document.getElementById('schizo-symptoms').addEventListener('change', showSchizophreniaChecklist);
}

function showSchizophreniaChecklist(e) {
  const div = document.getElementById('schizophrenia-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ FAA certification for schizophrenia is extremely rare and requires long-term documented stability.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Comprehensive psychiatric evaluation</li>
          <li>Neurocognitive testing (CogScreen-AE)</li>
          <li>No symptoms or treatment changes in ≥5 years</li>
          <li>Independent review by FAA psychiatric consultant</li>
        </ul>
        ❗ Most cases will still result in deferral or denial.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ Active or recent symptoms of schizophrenia are disqualifying for FAA medical certification.
      </div>
    `;
  }
}

// Personality Disorders
function evaluatePersonality() {
  const pers = document.getElementById('personality');
  const persInfo = document.getElementById('personality-info');
  persInfo.innerHTML = "";
  if (!pers.checked) return;

  persInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Have you ever experienced behavior that resulted in job loss, arrest, or psychiatric hospitalization?</label>
      <select id="personality-impact">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="personality-followup"></div>
    </div>
  `;

  document.getElementById('personality-impact').addEventListener('change', showPersonalityChecklist);
}

function showPersonalityChecklist(e) {
  const div = document.getElementById('personality-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may consider certification if no history of harmful behavior or instability.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Psychiatric evaluation</li>
          <li>Confirmation of stable social and occupational functioning</li>
          <li>No legal or disciplinary issues on record</li>
        </ul>
        ⚠️ Additional FAA review likely.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Personality disorders with behavioral impairment may be disqualifying.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Comprehensive psychiatric evaluation</li>
          <li>Incident reports or legal documentation</li>
          <li>Evidence of sustained improvement and control</li>
        </ul>
        ❗ FAA decision is case-by-case and usually deferred.
      </div>
    `;
  }
}

// PTSD
function evaluatePTSD() {
  const ptsd = document.getElementById('ptsd');
  const ptsdInfo = document.getElementById('ptsd-info');
  ptsdInfo.innerHTML = "";
  if (!ptsd.checked) return;

  ptsdInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧠 Are you currently experiencing flashbacks, nightmares, or panic symptoms?</label>
      <select id="ptsd-symptoms">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="ptsd-followup"></div>
    </div>
  `;

  document.getElementById('ptsd-symptoms').addEventListener('change', showPTSDChecklist);
}

function showPTSDChecklist(e) {
  const div = document.getElementById('ptsd-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may consider certification for stable PTSD without symptoms.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Psychiatric evaluation confirming remission</li>
          <li>Functional status and work history</li>
          <li>Medication list (if any) and treatment summary</li>
        </ul>
        ⚠️ FAA may still request follow-up evaluation or CogScreen.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Ongoing PTSD symptoms are typically disqualifying.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Full psychiatric evaluation</li>
          <li>Treatment history and symptom timeline</li>
          <li>Impact on function and response to therapy</li>
        </ul>
        ❗ FAA review is required and often deferred for symptomatic individuals.
      </div>
    `;
  }
}

// SSRI Use (from medical history)
function evaluateSSRIHistory() {
  const ssri = document.getElementById('ssri-history');
  const ssriInfo = document.getElementById('ssri-history-info');
  ssriInfo.innerHTML = "";
  if (!ssri.checked) return;

  ssriInfo.innerHTML = `
    <div class="medical-guidance">
      <label>💊 Are you currently taking the SSRI, or was it in the past?</label>
      <select id="ssri-current">
        <option value="">-- Select --</option>
        <option value="current">Currently using</option>
        <option value="past">Past use only</option>
      </select>
      <div id="ssri-followup"></div>
    </div>
  `;

  document.getElementById('ssri-current').addEventListener('change', showSSRIFollowup);
}

function showSSRIFollowup(e) {
  const value = e.target.value;
  const div = document.getElementById('ssri-followup');

  if (value === 'past') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Past SSRI use with full resolution may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Psychiatric history summary</li>
          <li>Discontinuation timeline and reason</li>
          <li>Confirmation of current stability (no recurrence)</li>
        </ul>
      </div>
    `;
  } else if (value === 'current') {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Current SSRI use is only allowed under strict FAA protocol (SSRI Pathway).<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>FAA-approved SSRI (e.g., Zoloft, Lexapro, Prozac, Celexa)</li>
          <li>Detailed psychiatric evaluation</li>
          <li>CogScreen-AE neurocognitive testing</li>
          <li>No history of severe depression, psychosis, or bipolar disorder</li>
          <li>Follow-up every 6 months</li>
        </ul>
        ❗ FAA Special Issuance required and often deferred for review.
      </div>
    `;
  } else {
    div.innerHTML = "";
  }
}

// Diabetes Mellitus
function evaluateDiabetes() {
  const diabetes = document.getElementById('diabetes');
  const diabetesInfo = document.getElementById('diabetes-info');
  diabetesInfo.innerHTML = "";
  if (!diabetes.checked) return;

  diabetesInfo.innerHTML = `
    <div class="medical-guidance">
      <label>💉 Are you insulin-dependent?</label>
      <select id="diabetes-insulin">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="diabetes-followup"></div>
    </div>
  `;

  document.getElementById('diabetes-insulin').addEventListener('change', showDiabetesChecklist);
}

function showDiabetesChecklist(e) {
  const div = document.getElementById('diabetes-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Insulin-treated diabetes is permitted only under the FAA's ITDM protocol.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Detailed endocrinologist evaluation</li>
          <li>12 months of CGM (continuous glucose monitoring) data</li>
          <li>Flight Risk Assessment completed by AME</li>
          <li>Compliance history and A1c trends</li>
        </ul>
        ❗ FAA Special Issuance required and reviewed annually.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Non-insulin-treated diabetes may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Hemoglobin A1c (within 90 days)</li>
          <li>Treating physician statement of control</li>
          <li>List of medications and lifestyle management details</li>
        </ul>
        ⚠️ FAA may request periodic labs and follow-up reports.
      </div>
    `;
  }
}

// Hypothyroidism
function evaluateHypothyroidism() {
  const hypo = document.getElementById('hypothyroidism');
  const hypoInfo = document.getElementById('hypothyroidism-info');
  hypoInfo.innerHTML = "";
  if (!hypo.checked) return;

  hypoInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧪 Is your thyroid hormone level currently stable with treatment?</label>
      <select id="hypo-stable">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="hypothyroidism-followup"></div>
    </div>
  `;

  document.getElementById('hypo-stable').addEventListener('change', showHypothyroidismChecklist);
}

function showHypothyroidismChecklist(e) {
  const div = document.getElementById('hypothyroidism-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Controlled hypothyroidism is typically certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Most recent TSH and Free T4 labs</li>
          <li>Statement from treating provider confirming stability</li>
          <li>Medication and dosage details</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Unstable thyroid levels must be corrected before FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Updated labs showing normalized thyroid levels</li>
          <li>Follow-up visit summary with treatment adjustments</li>
        </ul>
      </div>
    `;
  }
}

// Hyperthyroidism
function evaluateHyperthyroidism() {
  const hyper = document.getElementById('hyperthyroidism');
  const hyperInfo = document.getElementById('hyperthyroidism-info');
  hyperInfo.innerHTML = "";
  if (!hyper.checked) return;

  hyperInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🩺 Are your symptoms and thyroid hormone levels currently under control?</label>
      <select id="hyperthyroid-controlled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="hyperthyroidism-followup"></div>
    </div>
  `;

  document.getElementById('hyperthyroid-controlled').addEventListener('change', showHyperthyroidismChecklist);
}

function showHyperthyroidismChecklist(e) {
  const div = document.getElementById('hyperthyroidism-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Controlled hyperthyroidism may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent TSH, Free T4, and T3 labs</li>
          <li>Statement from your physician confirming clinical control</li>
          <li>Details of medications or radioactive iodine treatment (if applicable)</li>
        </ul>
        ⚠️ FAA may request follow-up labs periodically.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ FAA will defer certification until thyroid levels are stabilized.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent abnormal thyroid panel</li>
          <li>Treatment plan and timeline for control</li>
        </ul>
      </div>
    `;
  }
}
// Obesity (treated)
function evaluateObesity() {
  const obesity = document.getElementById('obesity');
  const obesityInfo = document.getElementById('obesity-info');
  obesityInfo.innerHTML = "";
  if (!obesity.checked) return;

  obesityInfo.innerHTML = `
    <div class="medical-guidance">
      <label>⚖️ Have you experienced weight loss and control through treatment or lifestyle changes?</label>
      <select id="obesity-treated">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="obesity-followup"></div>
    </div>
  `;

  document.getElementById('obesity-treated').addEventListener('change', showObesityChecklist);
}

function showObesityChecklist(e) {
  const div = document.getElementById('obesity-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Treated obesity may be certifiable when well managed.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent BMI or weight documentation</li>
          <li>Treating physician's note on clinical status and weight loss</li>
          <li>Confirmation of no uncontrolled comorbidities (e.g., diabetes, sleep apnea)</li>
        </ul>
        ⚠️ FAA may still evaluate risk based on associated conditions.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Obesity without treatment or associated control may trigger FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Evaluation by treating physician</li>
          <li>Screening for comorbidities (labs, sleep study, etc.)</li>
          <li>Plan for weight management</li>
        </ul>
      </div>
    `;
  }
}

// Prediabetes
function evaluatePrediabetes() {
  const pre = document.getElementById('prediabetes');
  const preInfo = document.getElementById('prediabetes-info');
  preInfo.innerHTML = "";
  if (!pre.checked) return;

  preInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧪 Was your most recent Hemoglobin A1c below 6.5%?</label>
      <select id="a1c-below">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="prediabetes-followup"></div>
    </div>
  `;

  document.getElementById('a1c-below').addEventListener('change', showPrediabetesChecklist);
}

function showPrediabetesChecklist(e) {
  const div = document.getElementById('prediabetes-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Prediabetes with stable A1c is certifiable with monitoring.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent Hemoglobin A1c result (within 90 days)</li>
          <li>Statement from treating provider confirming lifestyle management or metformin use</li>
          <li>No evidence of progression to diabetes</li>
        </ul>
        ⚠️ FAA may request ongoing monitoring depending on risk profile.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ A1c ≥ 6.5% indicates possible diabetes. Further review required.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Repeat A1c or fasting glucose</li>
          <li>Consultation with provider on diagnostic criteria</li>
          <li>Management plan (if diabetes confirmed)</li>
        </ul>
      </div>
    `;
  }
}

// Low Testosterone
function evaluateLowTestosterone() {
  const lt = document.getElementById('lowtestosterone');
  const ltInfo = document.getElementById('lowtestosterone-info');
  ltInfo.innerHTML = "";
  if (!lt.checked) return;

  ltInfo.innerHTML = `
    <div class="medical-guidance">
      <label>💉 Are you currently receiving testosterone replacement therapy (TRT)?</label>
      <select id="trt-status">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="lowtestosterone-followup"></div>
    </div>
  `;

  document.getElementById('trt-status').addEventListener('change', showLowTestosteroneChecklist);
}

function showLowTestosteroneChecklist(e) {
  const div = document.getElementById('lowtestosterone-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ TRT is typically allowed if stable and monitored.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Endocrinologist or primary care evaluation</li>
          <li>Recent testosterone level (total and free)</li>
          <li>Dosing schedule and medication type</li>
          <li>No side effects impacting mood, BP, or cognition</li>
        </ul>
        ⚠️ FAA may request re-evaluation annually.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ If not on treatment, no additional FAA review typically required.<br><br>
        <strong>📋 Optional Documentation:</strong>
        <ul>
          <li>Baseline testosterone lab (optional)</li>
          <li>Physician statement confirming no symptoms</li>
        </ul>
      </div>
    `;
  }
}

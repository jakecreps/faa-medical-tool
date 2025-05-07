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
  document.getElementById('glaucoma')?.addEventListener('change', evaluateVisionConditions);
  document.getElementById('retinopathy')?.addEventListener('change', evaluateVisionConditions);
  document.getElementById('ocular')?.addEventListener('change', evaluateVisionConditions);
  document.getElementById('cataracts')?.addEventListener('change', evaluateVisionConditions);
  document.getElementById('hearing')?.addEventListener('change', evaluateENTConditions);
  document.getElementById('vertigo')?.addEventListener('change', evaluateENTConditions);
  document.getElementById('sinusitis')?.addEventListener('change', evaluateENTConditions);
  document.getElementById('asthma')?.addEventListener('change', evaluatePulmonaryConditions);
  document.getElementById('copd')?.addEventListener('change', evaluatePulmonaryConditions);
  document.getElementById('sleepapnea')?.addEventListener('change', evaluatePulmonaryConditions);
  document.getElementById('thrombocytopenia')?.addEventListener('change', evaluateHematologicConditions);
  document.getElementById('anemia')?.addEventListener('change', evaluateHematologicConditions);
  document.getElementById('lymphoma')?.addEventListener('change', evaluateHematologicConditions);
  document.getElementById('bladdercancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('breastcancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('coloncancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('melanoma')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('prostatecancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('renalcancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('testicularcancer')?.addEventListener('change', evaluateOncologicConditions);
  document.getElementById('colitis')?.addEventListener('change', evaluateGiGuConditions);
  document.getElementById('hepatitis')?.addEventListener('change', evaluateGiGuConditions);
  document.getElementById('renalcalculi')?.addEventListener('change', evaluateGiGuConditions);
  document.getElementById('genitourinarytumors')?.addEventListener('change', evaluateGiGuConditions);
  document.getElementById('arthritis')?.addEventListener('change', evaluateMusculoskeletalConditions);
  document.getElementById('mskinjuries')?.addEventListener('change', evaluateMusculoskeletalConditions);
  document.getElementById('spinal')?.addEventListener('change', evaluateMusculoskeletalConditions);
  document.getElementById('psoriasis')?.addEventListener('change', evaluateDermatologicConditions);
  document.getElementById('alcohol')?.addEventListener('change', evaluateSubstanceUseConditions);
  document.getElementById('druguse')?.addEventListener('change', evaluateSubstanceUseConditions);
  document.getElementById('hims')?.addEventListener('change', evaluateSubstanceUseConditions);

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

  function evaluateVisionConditions() {
    evaluateGlaucoma();
    evaluateRetinopathy();
    evaluateOcularMotility();
    evaluateCataracts();
  }

  function evaluateENTConditions() {
    evaluateHearingLoss();
    evaluateVertigo();
    evaluateSinusitis();
  }  

  function evaluatePulmonaryConditions() {
    evaluateAsthma();
    evaluateCOPD();
    evaluateSleepApnea();
  }

  function evaluateHematologicConditions() {
    evaluateThrombocytopenia();
    evaluateAnemia();
    evaluateLymphoma();
  }

  function evaluateOncologicConditions() {
    evaluateBladderCancer();
    evaluateBreastCancer();
    evaluateColonCancer();
    evaluateMelanoma();
    evaluateProstateCancer();
    evaluateRenalCancer();
    evaluateTesticularCancer();
  }

  function evaluateGiGuConditions() {
    evaluateColitis();
    evaluateHepatitis();
    evaluateRenalCalculi();
    evaluateGenitourinaryTumors();
  }

  function evaluateMusculoskeletalConditions() {
    evaluateArthritis();
    evaluateMusculoskeletalInjuries();
    evaluateSpinalDisorders(); 
  }  

  function evaluateDermatologicConditions() {
    evaluatePsoriasis();
  }
  
  function evaluateSubstanceUseConditions() {
    evaluateAlcoholDependence();
    evaluateDrugUse();
    evaluateHIMS();
  }  
  
  function evaluateAllConditions() {
    evaluateCardioConditions();
    evaluateNeuroConditions();
    evaluatePsychConditions();
    evaluateEndocrineConditions();
    evaluateVisionConditions();
    evaluateENTConditions();
    evaluatePulmonaryConditions();
    evaluateHematologicConditions();
    evaluateOncologicConditions();
    evaluateGiGuConditions();
    evaluateMusculoskeletalConditions();
    evaluateDermatologicConditions();
    evaluateSubstanceUseConditions();
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

// Glaucoma
function evaluateGlaucoma() {
  const gl = document.getElementById('glaucoma');
  const glInfo = document.getElementById('glaucoma-info');
  glInfo.innerHTML = "";
  if (!gl.checked) return;

  glInfo.innerHTML = `
    <div class="medical-guidance">
      <label>👁️ Is your intraocular pressure (IOP) controlled and vision stable with treatment?</label>
      <select id="glaucoma-controlled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="glaucoma-followup"></div>
    </div>
  `;

  document.getElementById('glaucoma-controlled').addEventListener('change', showGlaucomaChecklist);
}

function showGlaucomaChecklist(e) {
  const div = document.getElementById('glaucoma-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may certify pilots with stable glaucoma.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Ophthalmologist evaluation</li>
          <li>Visual field testing results</li>
          <li>Intraocular pressure (IOP) records</li>
          <li>Medication or surgical treatment summary</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Uncontrolled glaucoma is disqualifying until stabilized.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent ophthalmologic exam</li>
          <li>IOP readings and treatment plan</li>
        </ul>
      </div>
    `;
  }
}

// Retinopathy
function evaluateRetinopathy() {
  const ret = document.getElementById('retinopathy');
  const retInfo = document.getElementById('retinopathy-info');
  retInfo.innerHTML = "";
  if (!ret.checked) return;

  retInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🩸 Has your vision or visual field been affected by the retinopathy?</label>
      <select id="retinopathy-impact">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="retinopathy-followup"></div>
    </div>
  `;

  document.getElementById('retinopathy-impact').addEventListener('change', showRetinopathyChecklist);
}

function showRetinopathyChecklist(e) {
  const div = document.getElementById('retinopathy-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may certify if visual acuity and fields are unaffected.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Ophthalmologist evaluation</li>
          <li>Visual acuity and field testing</li>
          <li>Fundus photos or retinal imaging</li>
          <li>Cause and stability of retinopathy</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Vision-impairing retinopathy requires FAA review and is often disqualifying.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Detailed eye exam including field and acuity tests</li>
          <li>Ophthalmologist opinion on flight safety</li>
          <li>Diabetic status (if applicable)</li>
        </ul>
      </div>
    `;
  }
}

// Ocular Motility Disorder
function evaluateOcularMotility() {
  const ocular = document.getElementById('ocular');
  const ocularInfo = document.getElementById('ocular-info');
  ocularInfo.innerHTML = "";
  if (!ocular.checked) return;

  ocularInfo.innerHTML = `
    <div class="medical-guidance">
      <label>👁️ Are you experiencing double vision, impaired depth perception, or uncontrolled eye movement?</label>
      <select id="ocular-symptoms">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="ocular-followup"></div>
    </div>
  `;

  document.getElementById('ocular-symptoms').addEventListener('change', showOcularChecklist);
}

function showOcularChecklist(e) {
  const div = document.getElementById('ocular-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may certify if ocular motility issues do not impair vision or coordination.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Ophthalmologist or optometrist evaluation</li>
          <li>Binocular vision and depth perception test</li>
          <li>Confirmation of no diplopia (double vision)</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active diplopia or uncontrolled eye movement is disqualifying until resolved.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Eye exam detailing impact on visual function</li>
          <li>Specialist recommendation regarding aviation safety</li>
          <li>Treatment or corrective plan (e.g. prism lenses, surgery)</li>
        </ul>
      </div>
    `;
  }
}

// Cataracts / Lens Replacement
function evaluateCataracts() {
  const cataracts = document.getElementById('cataracts');
  const cataractsInfo = document.getElementById('cataracts-info');
  cataractsInfo.innerHTML = "";
  if (!cataracts.checked) return;

  cataractsInfo.innerHTML = `
    <div class="medical-guidance">
      <label>👁️ Has your vision been fully restored following surgery or lens replacement?</label>
      <select id="cataracts-corrected">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="cataracts-followup"></div>
    </div>
  `;

  document.getElementById('cataracts-corrected').addEventListener('change', showCataractsChecklist);
}

function showCataractsChecklist(e) {
  const div = document.getElementById('cataracts-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may certify post-surgical vision if standards are met.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Post-op visual acuity and field results</li>
          <li>Ophthalmologist summary stating vision correction is successful</li>
          <li>Implanted lens type (if applicable)</li>
        </ul>
        ⚠️ Multifocal lenses may require additional review.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ FAA will not issue a certificate until vision is corrected to required standards.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Updated ophthalmologic assessment</li>
          <li>Planned or pending treatment (e.g., surgery)</li>
        </ul>
      </div>
    `;
  }
}

// Hearing Loss
function evaluateHearingLoss() {
  const hearing = document.getElementById('hearing');
  const hearingInfo = document.getElementById('hearing-info');
  hearingInfo.innerHTML = "";
  if (!hearing.checked) return;

  hearingInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🎧 Can you pass a conversational voice test or FAA-approved audiometry?</label>
      <select id="hearing-pass">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="hearing-followup"></div>
    </div>
  `;

  document.getElementById('hearing-pass').addEventListener('change', showHearingChecklist);
}

function showHearingChecklist(e) {
  const div = document.getElementById('hearing-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Hearing is acceptable if FAA criteria are met with or without aids.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Hearing test results (voice test or audiogram)</li>
          <li>Use of hearing aids (if applicable)</li>
          <li>Medical statement from ENT or audiologist</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ If you cannot pass hearing tests, certification is not allowed until corrected.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Formal audiometric testing results</li>
          <li>Evaluation of whether aids restore hearing to required thresholds</li>
        </ul>
      </div>
    `;
  }
}

// Vertigo / Meniere’s
function evaluateVertigo() {
  const vert = document.getElementById('vertigo');
  const vertInfo = document.getElementById('vertigo-info');
  vertInfo.innerHTML = "";
  if (!vert.checked) return;

  vertInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🌀 Have you had any episodes of vertigo or imbalance in the past 6 months?</label>
      <select id="vertigo-recent">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="vertigo-followup"></div>
    </div>
  `;

  document.getElementById('vertigo-recent').addEventListener('change', showVertigoChecklist);
}

function showVertigoChecklist(e) {
  const div = document.getElementById('vertigo-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ If asymptomatic for 6+ months, FAA may consider certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>ENT or neurologist evaluation</li>
          <li>Vertigo history summary</li>
          <li>Balance testing (ENG/VNG if available)</li>
          <li>Clearance of spatial disorientation risk</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ FAA will defer certification if symptoms persist or pose flight risk.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current ENT/neurologist report</li>
          <li>Testing results (e.g. ENG, MRI if done)</li>
          <li>Treatment plan and follow-up schedule</li>
        </ul>
      </div>
    `;
  }
}

// Chronic Sinusitis
function evaluateSinusitis() {
  const sinus = document.getElementById('sinusitis');
  const sinusInfo = document.getElementById('sinusitis-info');
  sinusInfo.innerHTML = "";
  if (!sinus.checked) return;

  sinusInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🌫️ Have your symptoms caused in-flight barotrauma, blockage, or incapacitation?</label>
      <select id="sinus-severe">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="sinusitis-followup"></div>
    </div>
  `;

  document.getElementById('sinus-severe').addEventListener('change', showSinusitisChecklist);
}

function showSinusitisChecklist(e) {
  const div = document.getElementById('sinusitis-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Chronic sinusitis may be certifiable if symptoms are mild and controlled.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>ENT evaluation</li>
          <li>History of frequency and severity</li>
          <li>Medication list (e.g., antihistamines, sprays)</li>
          <li>CT or sinus imaging if available</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ If symptoms impair flight performance, FAA will require thorough review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>ENT or flight surgeon report on aeromedical safety</li>
          <li>Recent imaging and symptom resolution plan</li>
          <li>Surgical history or consideration (if applicable)</li>
        </ul>
      </div>
    `;
  }
}

// Asthma
function evaluateAsthma() {
  const asthma = document.getElementById('asthma');
  const asthmaInfo = document.getElementById('asthma-info');
  asthmaInfo.innerHTML = "";
  if (!asthma.checked) return;

  asthmaInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🌬️ Is your asthma currently well-controlled without recent ER visits or steroid use?</label>
      <select id="asthma-controlled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="asthma-followup"></div>
    </div>
  `;

  document.getElementById('asthma-controlled').addEventListener('change', showAsthmaChecklist);
}

function showAsthmaChecklist(e) {
  const div = document.getElementById('asthma-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable asthma is typically certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Pulmonary function tests (PFTs or spirometry)</li>
          <li>Clinical summary from treating provider</li>
          <li>Medication list (inhalers, steroids, etc.)</li>
        </ul>
        ⚠️ FAA may request periodic updates if symptoms recur.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Uncontrolled asthma or recent exacerbations will require FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>ER visit records and steroid use history</li>
          <li>Pulmonary evaluation and treatment plan</li>
          <li>Updated spirometry or PFT results</li>
        </ul>
      </div>
    `;
  }
}

// COPD
function evaluateCOPD() {
  const copd = document.getElementById('copd');
  const copdInfo = document.getElementById('copd-info');
  copdInfo.innerHTML = "";
  if (!copd.checked) return;

  copdInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🫁 Have you had any recent hospitalizations or oxygen use?</label>
      <select id="copd-severe">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="copd-followup"></div>
    </div>
  `;

  document.getElementById('copd-severe').addEventListener('change', showCOPDChecklist);
}

function showCOPDChecklist(e) {
  const div = document.getElementById('copd-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable COPD may be certifiable with FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent spirometry or PFT results</li>
          <li>Pulmonologist evaluation</li>
          <li>Medication and oxygen usage summary</li>
        </ul>
        ⚠️ FAA may require retesting periodically.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ If recent hospitalizations or oxygen are required, FAA will likely defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Hospital discharge summary</li>
          <li>Pulmonary assessment and treatment plan</li>
          <li>Oxygen use history and oxygen saturation testing</li>
        </ul>
      </div>
    `;
  }
}

// Sleep Apnea
function evaluateSleepApnea() {
  const sa = document.getElementById('sleepapnea');
  const saInfo = document.getElementById('sleepapnea-info');
  saInfo.innerHTML = "";
  if (!sa.checked) return;

  saInfo.innerHTML = `
    <div class="medical-guidance">
      <label>😴 Are you currently compliant with FAA-approved treatment (e.g. CPAP)?</label>
      <select id="sleepapnea-treated">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="sleepapnea-followup"></div>
    </div>
  `;

  document.getElementById('sleepapnea-treated').addEventListener('change', showSleepApneaChecklist);
}

function showSleepApneaChecklist(e) {
  const div = document.getElementById('sleepapnea-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA accepts well-managed sleep apnea with proper documentation.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Sleep study report (diagnostic and compliance data)</li>
          <li>CPAP download (minimum 30 days showing ≥75% use with 4+ hrs/night)</li>
          <li>Physician statement of compliance and symptom resolution</li>
        </ul>
        ⚠️ FAA may require annual follow-up with updated data.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ Non-compliance with treatment disqualifies certification.<br><br>
        <strong>📋 Required Before Reapplying:</strong>
        <ul>
          <li>Initiation or resumption of therapy (CPAP or alternative)</li>
          <li>Documented compliance with 30+ days of usage</li>
          <li>Updated physician review and sleep evaluation</li>
        </ul>
      </div>
    `;
  }
}

// Thrombocytopenia
function evaluateThrombocytopenia() {
  const tp = document.getElementById('thrombocytopenia');
  const tpInfo = document.getElementById('thrombocytopenia-info');
  tpInfo.innerHTML = "";
  if (!tp.checked) return;

  tpInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🩸 Is your platelet count consistently above 100,000 and stable?</label>
      <select id="tp-count">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="tp-followup"></div>
    </div>
  `;

  document.getElementById('tp-count').addEventListener('change', showThrombocytopeniaChecklist);
}

function showThrombocytopeniaChecklist(e) {
  const div = document.getElementById('tp-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable thrombocytopenia above 100,000 may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Complete blood count (CBC)</li>
          <li>Hematologist evaluation</li>
          <li>Underlying diagnosis and prognosis</li>
          <li>Statement of absence of bleeding symptoms</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Platelets under 100,000 or active bleeding risks require FAA deferral.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Full hematologic workup and platelet trend</li>
          <li>Treatment plan and clinical notes</li>
          <li>Justification for aviation safety clearance</li>
        </ul>
      </div>
    `;
  }
}

// Anemia (significant)
function evaluateAnemia() {
  const anemia = document.getElementById('anemia');
  const anemiaInfo = document.getElementById('anemia-info');
  anemiaInfo.innerHTML = "";
  if (!anemia.checked) return;

  anemiaInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧪 Is your hemoglobin level ≥11 g/dL and condition stable?</label>
      <select id="anemia-stable">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="anemia-followup"></div>
    </div>
  `;

  document.getElementById('anemia-stable').addEventListener('change', showAnemiaChecklist);
}

function showAnemiaChecklist(e) {
  const div = document.getElementById('anemia-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may approve if anemia is mild, stable, and not symptomatic.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Recent CBC and hemoglobin/hematocrit values</li>
          <li>Physician statement on cause and treatment</li>
          <li>Confirmation of no fatigue or cognitive impairment</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Symptomatic or severe anemia will result in FAA deferral.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Hematologic workup including iron/B12/folate labs</li>
          <li>Treatment plan and prognosis</li>
          <li>Functional impact assessment</li>
        </ul>
      </div>
    `;
  }
}

// Lymphoma / Hodgkin’s Disease
function evaluateLymphoma() {
  const lymph = document.getElementById('lymphoma');
  const lymphInfo = document.getElementById('lymphoma-info');
  lymphInfo.innerHTML = "";
  if (!lymph.checked) return;

  lymphInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧬 Have you completed treatment and are currently in remission?</label>
      <select id="lymphoma-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="lymphoma-followup"></div>
    </div>
  `;

  document.getElementById('lymphoma-remission').addEventListener('change', showLymphomaChecklist);
}

function showLymphomaChecklist(e) {
  const div = document.getElementById('lymphoma-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ If in remission with no impairing side effects, FAA may approve certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncologist report confirming remission</li>
          <li>Treatment summary and end date</li>
          <li>Any follow-up imaging (CT/PET)</li>
          <li>Cognitive and physical function clearance</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active treatment or uncontrolled disease defers certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current treatment plan from oncologist</li>
          <li>Progress updates and side effect summary</li>
          <li>Expected timeline for stabilization or remission</li>
        </ul>
      </div>
    `;
  }
}

// Bladder Cancer
function evaluateBladderCancer() {
  const bc = document.getElementById('bladdercancer');
  const bcInfo = document.getElementById('bladdercancer-info');
  bcInfo.innerHTML = "";
  if (!bc.checked) return;

  bcInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧫 Are you currently in remission and off active cancer treatment?</label>
      <select id="bc-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="bc-followup"></div>
    </div>
  `;

  document.getElementById('bc-remission').addEventListener('change', showBladderCancerChecklist);
}

function showBladderCancerChecklist(e) {
  const div = document.getElementById('bc-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Remission may qualify for FAA certification with sufficient documentation.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncology statement confirming remission</li>
          <li>Pathology and staging reports</li>
          <li>Last cystoscopy results or imaging</li>
          <li>Functional assessment from urology/oncology</li>
        </ul>
        ⚠️ FAA may request periodic follow-up scans.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active bladder cancer or recent treatment defers certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Treatment plan and progress summary</li>
          <li>Oncologist's functional assessment</li>
          <li>Expected timeline for remission</li>
        </ul>
      </div>
    `;
  }
}

// Breast Cancer
function evaluateBreastCancer() {
  const bc = document.getElementById('breastcancer');
  const bcInfo = document.getElementById('breastcancer-info');
  bcInfo.innerHTML = "";
  if (!bc.checked) return;

  bcInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🎗️ Are you currently in remission and free from impairing treatment side effects?</label>
      <select id="bc-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="bc-followup"></div>
    </div>
  `;

  document.getElementById('bc-remission').addEventListener('change', showBreastCancerChecklist);
}

function showBreastCancerChecklist(e) {
  const div = document.getElementById('bc-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Remission with stable status is generally certifiable with proper documentation.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncologist statement confirming remission</li>
          <li>Staging/pathology summary</li>
          <li>Most recent mammogram or imaging report</li>
          <li>Details on any ongoing medications (e.g., tamoxifen)</li>
        </ul>
        ⚠️ FAA may request annual updates.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active cancer or ongoing impairing treatment will defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current treatment plan from oncologist</li>
          <li>Functional assessment of fitness to fly</li>
          <li>Estimated timeline to remission or treatment completion</li>
        </ul>
      </div>
    `;
  }
}

// Colon Cancer
function evaluateColonCancer() {
  const colon = document.getElementById('coloncancer');
  const colonInfo = document.getElementById('coloncancer-info');
  colonInfo.innerHTML = "";
  if (!colon.checked) return;

  colonInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧻 Are you in remission and free of gastrointestinal symptoms or treatment side effects?</label>
      <select id="colon-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="colon-followup"></div>
    </div>
  `;

  document.getElementById('colon-remission').addEventListener('change', showColonCancerChecklist);
}

function showColonCancerChecklist(e) {
  const div = document.getElementById('colon-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable remission may be certifiable with documentation.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncologist statement confirming remission</li>
          <li>Colonoscopy or imaging results (if applicable)</li>
          <li>Histology/pathology report</li>
          <li>Confirmation of no GI symptoms impairing function</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active disease or impairing symptoms defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Treatment plan from oncologist</li>
          <li>Current functional assessment</li>
          <li>Estimated timeline for remission</li>
        </ul>
      </div>
    `;
  }
}

// Melanoma
function evaluateMelanoma() {
  const melanoma = document.getElementById('melanoma');
  const melanomaInfo = document.getElementById('melanoma-info');
  melanomaInfo.innerHTML = "";
  if (!melanoma.checked) return;

  melanomaInfo.innerHTML = `
    <div class="medical-guidance">
      <label>☀️ Was your melanoma in situ or Stage I, fully excised, and without recurrence?</label>
      <select id="melanoma-stage">
        <option value="">-- Select --</option>
        <option value="early">Yes (in situ or Stage I, excised)</option>
        <option value="advanced">No (Stage II or higher, or not excised)</option>
      </select>
      <div id="melanoma-followup"></div>
    </div>
  `;

  document.getElementById('melanoma-stage').addEventListener('change', showMelanomaChecklist);
}

function showMelanomaChecklist(e) {
  const div = document.getElementById('melanoma-followup');
  if (e.target.value === 'early') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Early-stage melanoma may be certifiable after complete excision.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Dermatologist or oncologist statement confirming full excision</li>
          <li>Pathology report with stage and margins</li>
          <li>Skin exam and follow-up plan</li>
        </ul>
        ⚠️ FAA may require periodic dermatologic surveillance.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Advanced melanoma requires FAA review for metastatic risk.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncology treatment summary</li>
          <li>Brain MRI and PET/CT scan (if done)</li>
          <li>Neurologic and cognitive status</li>
          <li>Plan for surveillance and recurrence risk assessment</li>
        </ul>
      </div>
    `;
  }
}

// Prostate Cancer
function evaluateProstateCancer() {
  const prostate = document.getElementById('prostatecancer');
  const prostateInfo = document.getElementById('prostatecancer-info');
  prostateInfo.innerHTML = "";
  if (!prostate.checked) return;

  prostateInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧬 Are you in remission or on stable, non-impairing treatment?</label>
      <select id="prostate-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="prostate-followup"></div>
    </div>
  `;

  document.getElementById('prostate-remission').addEventListener('change', showProstateCancerChecklist);
}

function showProstateCancerChecklist(e) {
  const div = document.getElementById('prostate-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may approve certification with remission or stable treatment.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Urologist or oncologist statement of status</li>
          <li>PSA levels and trend</li>
          <li>Treatment summary (surgery, radiation, etc.)</li>
          <li>Confirmation of no cognitive or physical impairments</li>
        </ul>
        ⚠️ Periodic updates may be requested by the FAA.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active or progressing prostate cancer typically requires deferral.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current treatment plan and response</li>
          <li>Functional and cognitive assessment</li>
          <li>PSA trends and oncologist review</li>
        </ul>
      </div>
    `;
  }
}

// Renal Cancer
function evaluateRenalCancer() {
  const renal = document.getElementById('renalcancer');
  const renalInfo = document.getElementById('renalcancer-info');
  renalInfo.innerHTML = "";
  if (!renal.checked) return;

  renalInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧫 Are you in remission with normal kidney function?</label>
      <select id="renal-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="renal-followup"></div>
    </div>
  `;

  document.getElementById('renal-remission').addEventListener('change', showRenalCancerChecklist);
}

function showRenalCancerChecklist(e) {
  const div = document.getElementById('renal-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Renal cancer in remission with stable function may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncology/urology statement confirming remission</li>
          <li>Imaging reports (CT/MRI)</li>
          <li>Renal function labs (eGFR, creatinine)</li>
          <li>Treatment summary</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active cancer or impaired renal function defers certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current oncology/urology evaluation</li>
          <li>Lab evidence of function and disease control</li>
          <li>FAA may require periodic follow-up imaging</li>
        </ul>
      </div>
    `;
  }
}

// Testicular Cancer
function evaluateTesticularCancer() {
  const tc = document.getElementById('testicularcancer');
  const tcInfo = document.getElementById('testicularcancer-info');
  tcInfo.innerHTML = "";
  if (!tc.checked) return;

  tcInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧪 Are you currently in remission and off chemotherapy?</label>
      <select id="tc-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="tc-followup"></div>
    </div>
  `;

  document.getElementById('tc-remission').addEventListener('change', showTesticularCancerChecklist);
}

function showTesticularCancerChecklist(e) {
  const div = document.getElementById('tc-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Testicular cancer in remission is typically certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Oncologist or urologist statement confirming remission</li>
          <li>Pathology and staging summary</li>
          <li>Post-treatment imaging and tumor marker results</li>
          <li>Statement of no cognitive or systemic side effects</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active disease or recent chemotherapy defers certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Treatment plan and estimated duration</li>
          <li>Functional and lab evaluations</li>
          <li>FAA may require waiting period post-therapy</li>
        </ul>
      </div>
    `;
  }
}

// Colitis (IBD, Crohn’s)
function evaluateColitis() {
  const colitis = document.getElementById('colitis');
  const colitisInfo = document.getElementById('colitis-info');
  colitisInfo.innerHTML = "";
  if (!colitis.checked) return;

  colitisInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🦠 Is your condition currently well-controlled without severe flare-ups?</label>
      <select id="colitis-controlled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="colitis-followup"></div>
    </div>
  `;

  document.getElementById('colitis-controlled').addEventListener('change', showColitisChecklist);
}

function showColitisChecklist(e) {
  const div = document.getElementById('colitis-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA may approve if condition is stable and does not impair flight safety.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Gastroenterologist note confirming control and stability</li>
          <li>Colonoscopy or imaging summary (if recent)</li>
          <li>Medication list and absence of disqualifying side effects</li>
          <li>Functional assessment: no dehydration, anemia, or urgency</li>
        </ul>
        ⚠️ FAA may request periodic updates depending on disease severity.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active disease or frequent flares defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Full GI evaluation and treatment plan</li>
          <li>Assessment of medications (e.g. steroids, immunosuppressants)</li>
          <li>Expected stability timeline and recent labs</li>
        </ul>
      </div>
    `;
  }
}

// Hepatitis
function evaluateHepatitis() {
  const hep = document.getElementById('hepatitis');
  const hepInfo = document.getElementById('hepatitis-info');
  hepInfo.innerHTML = "";
  if (!hep.checked) return;

  hepInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧪 Is your hepatitis inactive or well-controlled with normal liver function?</label>
      <select id="hep-status">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="hep-followup"></div>
    </div>
  `;

  document.getElementById('hep-status').addEventListener('change', showHepatitisChecklist);
}

function showHepatitisChecklist(e) {
  const div = document.getElementById('hep-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable hepatitis with normal function may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Hepatologist or physician note on control and stability</li>
          <li>Liver function tests (ALT, AST, bilirubin)</li>
          <li>Viral load (if applicable)</li>
          <li>Medications used and side effect profile</li>
        </ul>
        ⚠️ FAA may request regular lab follow-up.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active hepatitis or abnormal liver function defers certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Complete treatment plan from hepatologist</li>
          <li>Recent labs and imaging (e.g., FibroScan, ultrasound)</li>
          <li>Assessment of symptoms or complications (e.g., encephalopathy, fatigue)</li>
        </ul>
      </div>
    `;
  }
}

// Renal Calculi (Kidney Stones)
function evaluateRenalCalculi() {
  const rc = document.getElementById('renalcalculi');
  const rcInfo = document.getElementById('renalcalculi-info');
  rcInfo.innerHTML = "";
  if (!rc.checked) return;

  rcInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🪨 Have you had a stone episode within the past 2 years?</label>
      <select id="stone-recent">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="stone-followup"></div>
    </div>
  `;

  document.getElementById('stone-recent').addEventListener('change', showRenalCalculiChecklist);
}

function showRenalCalculiChecklist(e) {
  const div = document.getElementById('stone-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ No recent episodes — may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Urologist or physician note confirming history</li>
          <li>Imaging (CT, ultrasound) showing no active stones</li>
          <li>Metabolic work-up results (if performed)</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Recent or active stones require FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Details of most recent stone episode</li>
          <li>Stone analysis (if available)</li>
          <li>Imaging to confirm resolution or ongoing risk</li>
        </ul>
        ⏳ Pilots may be deferred during acute risk periods.
      </div>
    `;
  }
}

// Genitourinary Tumors
function evaluateGenitourinaryTumors() {
  const gu = document.getElementById('genitourinarytumors');
  const guInfo = document.getElementById('genitourinarytumors-info');
  guInfo.innerHTML = "";
  if (!gu.checked) return;

  guInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧬 Has the tumor been treated and confirmed in remission?</label>
      <select id="gu-remission">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="gu-followup"></div>
    </div>
  `;

  document.getElementById('gu-remission').addEventListener('change', showGenitourinaryTumorChecklist);
}

function showGenitourinaryTumorChecklist(e) {
  const div = document.getElementById('gu-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Remission and stability may allow FAA certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Urologist or oncologist statement confirming remission</li>
          <li>Imaging or follow-up reports confirming stability</li>
          <li>Treatment summary (surgery, radiation, chemo)</li>
          <li>Functional status (urinary, sexual, renal as applicable)</li>
        </ul>
        ⚠️ FAA may require periodic status updates depending on type and history.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active tumors defer FAA certification until treatment is completed and remission is documented.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current treatment plan</li>
          <li>Imaging/lab results showing disease status</li>
          <li>Urologic or oncologic assessment of fitness to fly</li>
        </ul>
      </div>
    `;
  }
}

// Arthritis (RA, OA)
function evaluateArthritis() {
  const arthritis = document.getElementById('arthritis');
  const arthritisInfo = document.getElementById('arthritis-info');
  arthritisInfo.innerHTML = "";
  if (!arthritis.checked) return;

  arthritisInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🦴 Does your arthritis cause functional impairment that affects flight controls?</label>
      <select id="arthritis-functional">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="arthritis-followup"></div>
    </div>
  `;

  document.getElementById('arthritis-functional').addEventListener('change', showArthritisChecklist);
}

function showArthritisChecklist(e) {
  const div = document.getElementById('arthritis-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Mild or stable arthritis may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Rheumatologist or physician note describing extent and location of arthritis</li>
          <li>Confirmation of no impact on fine or gross motor control</li>
          <li>Medication list (especially if on immunosuppressants or biologics)</li>
        </ul>
        ⚠️ FAA may request periodic updates if condition is progressive.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Functional impairment may defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Detailed musculoskeletal exam and range of motion assessment</li>
          <li>Functional fitness assessment related to cockpit duties</li>
          <li>Treatment and medication summary</li>
        </ul>
      </div>
    `;
  }
}

// Musculoskeletal Injuries
function evaluateMusculoskeletalInjuries() {
  const msk = document.getElementById('mskinjuries');
  const mskInfo = document.getElementById('mskinjuries-info');
  mskInfo.innerHTML = "";
  if (!msk.checked) return;

  mskInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🩼 Has the injury fully healed without ongoing pain or mobility issues?</label>
      <select id="msk-healed">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="msk-followup"></div>
    </div>
  `;

  document.getElementById('msk-healed').addEventListener('change', showMusculoskeletalInjuryChecklist);
}

function showMusculoskeletalInjuryChecklist(e) {
  const div = document.getElementById('msk-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Healed injuries that do not impair function may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Orthopedic or physician note confirming full recovery</li>
          <li>Details of injury and any residual hardware (e.g. screws, plates)</li>
          <li>Confirmation of full range of motion and ability to operate flight controls</li>
        </ul>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ FAA may defer certification if the injury impairs safety-critical movements.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Current status report from treating physician or physical therapist</li>
          <li>Functional limitations assessment</li>
          <li>Treatment plan and expected recovery timeline</li>
        </ul>
      </div>
    `;
  }
}

// Spinal Disorders
function evaluateSpinalDisorders() {
  const spinal = document.getElementById('spinal');
  const spinalInfo = document.getElementById('spinal-info');
  spinalInfo.innerHTML = "";
  if (!spinal.checked) return;

  spinalInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧍‍♂️ Does your spinal condition impair movement or cause neurological symptoms?</label>
      <select id="spinal-functional">
        <option value="">-- Select --</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <div id="spinal-followup"></div>
    </div>
  `;

  document.getElementById('spinal-functional').addEventListener('change', showSpinalDisorderChecklist);
}

function showSpinalDisorderChecklist(e) {
  const div = document.getElementById('spinal-followup');
  if (e.target.value === 'no') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Stable spinal conditions without impairment may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Orthopedic or neurosurgical evaluation</li>
          <li>Recent imaging (MRI/CT) if applicable</li>
          <li>Confirmation of full range of motion and motor function</li>
        </ul>
        ⚠️ FAA may request periodic updates if the condition is degenerative.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Impairing spinal disorders may delay or defer certification.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Neurological assessment (sensory/motor reflexes)</li>
          <li>Imaging reports</li>
          <li>Treatment summary and recovery timeline (if surgical)</li>
        </ul>
      </div>
    `;
  }
}

// Psoriasis (systemic)
function evaluatePsoriasis() {
  const ps = document.getElementById('psoriasis');
  const psInfo = document.getElementById('psoriasis-info');
  psInfo.innerHTML = "";
  if (!ps.checked) return;

  psInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🧴 Is your psoriasis stable and not affecting cognitive or physical performance?</label>
      <select id="psoriasis-status">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="psoriasis-followup"></div>
    </div>
  `;

  document.getElementById('psoriasis-status').addEventListener('change', showPsoriasisChecklist);
}

function showPsoriasisChecklist(e) {
  const div = document.getElementById('psoriasis-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ Controlled systemic psoriasis may be certifiable.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Dermatologist note confirming disease stability</li>
          <li>Medication list with side effect profile</li>
          <li>Evidence of no systemic involvement (e.g., arthritis)</li>
        </ul>
        ⚠️ FAA may request follow-up if condition flares.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Active or severe systemic psoriasis requires FAA review.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Dermatologist evaluation</li>
          <li>Functional impact assessment</li>
          <li>Treatment plan (especially if immunosuppressants used)</li>
        </ul>
      </div>
    `;
  }
}

// Alcohol Dependence / Abuse
function evaluateAlcoholDependence() {
  const alcohol = document.getElementById('alcohol');
  const alcoholInfo = document.getElementById('alcohol-info');
  alcoholInfo.innerHTML = "";
  if (!alcohol.checked) return;

  alcoholInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🍺 Have you completed treatment and maintained sobriety for at least 2 years?</label>
      <select id="alcohol-sober">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="alcohol-followup"></div>
    </div>
  `;

  document.getElementById('alcohol-sober').addEventListener('change', showAlcoholChecklist);
}

function showAlcoholChecklist(e) {
  const div = document.getElementById('alcohol-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ May be eligible for FAA review under HIMS protocol.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Substance abuse counselor and psychiatrist evaluations</li>
          <li>Proof of sobriety (random tests, sponsor statements)</li>
          <li>HIMS AME involvement and tracking</li>
          <li>12-step meeting attendance or similar recovery plan</li>
        </ul>
        ⚠️ Certification typically requires Special Issuance.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ Certification not possible until sustained recovery is demonstrated.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Treatment program summary (inpatient/outpatient)</li>
          <li>Current abstinence efforts and monitoring</li>
          <li>HIMS AME consultation for recovery plan</li>
        </ul>
      </div>
    `;
  }
}

// Drug Use
function evaluateDrugUse() {
  const drug = document.getElementById('druguse');
  const drugInfo = document.getElementById('druguse-info');
  drugInfo.innerHTML = "";
  if (!drug.checked) return;

  drugInfo.innerHTML = `
    <div class="medical-guidance">
      <label>💊 Have you completed rehabilitation and remained drug-free for at least 2 years?</label>
      <select id="drug-sober">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="drug-followup"></div>
    </div>
  `;

  document.getElementById('drug-sober').addEventListener('change', showDrugChecklist);
}

function showDrugChecklist(e) {
  const div = document.getElementById('drug-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ May qualify for Special Issuance under HIMS if stability is demonstrated.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Substance abuse treatment summary and discharge notes</li>
          <li>Random drug testing results</li>
          <li>Psychiatric and addiction specialist evaluations</li>
          <li>HIMS AME monitoring and sponsor feedback (if applicable)</li>
        </ul>
        ⚠️ FAA closely monitors all drug-related certifications.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⛔ FAA will not consider certification until rehabilitation is complete and long-term sobriety is established.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>Treatment plan and participation proof</li>
          <li>Drug test history</li>
          <li>Psychiatric evaluation of dependency status</li>
        </ul>
      </div>
    `;
  }
}

// HIMS Monitoring
function evaluateHIMS() {
  const hims = document.getElementById('hims');
  const himsInfo = document.getElementById('hims-info');
  himsInfo.innerHTML = "";
  if (!hims.checked) return;

  himsInfo.innerHTML = `
    <div class="medical-guidance">
      <label>🛠️ Are you currently enrolled in a HIMS program with an FAA-authorized AME?</label>
      <select id="hims-enrolled">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div id="hims-followup"></div>
    </div>
  `;

  document.getElementById('hims-enrolled').addEventListener('change', showHIMSChecklist);
}

function showHIMSChecklist(e) {
  const div = document.getElementById('hims-followup');
  if (e.target.value === 'yes') {
    div.innerHTML = `
      <div class="status-container status-ok">
        ✅ FAA Special Issuance may proceed with continued HIMS participation.<br><br>
        <strong>📋 Required Documentation:</strong>
        <ul>
          <li>HIMS AME reports and recommendations</li>
          <li>Random drug/alcohol test logs</li>
          <li>Peer support group attendance (e.g., AA, NA)</li>
          <li>Ongoing psychiatrist and counselor reports</li>
        </ul>
        ⚠️ FAA requires long-term monitoring for continued certification.
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="status-container status-flag">
        ⚠️ Enrollment in a HIMS program is required for FAA review in applicable cases.<br><br>
        <strong>📋 Required Next Steps:</strong>
        <ul>
          <li>Contact a HIMS-authorized AME</li>
          <li>Enroll in an FAA-compliant monitoring program</li>
          <li>Establish treatment, documentation, and support plan</li>
        </ul>
      </div>
    `;
  }
}

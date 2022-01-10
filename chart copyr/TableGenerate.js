const responses = [
    {
      SQL_TEXT: '/* OracleOEM */  SELECT SEVERITY_INDEX, CRITICAL_INICDENTS, WARNING_INCIDENTS from v$incmeter_summary    ',
      LAST_ACTIVE_TIME: '2022-01-02T19:23:05.000Z',
      DISK_READS: 1,
      CPU_TIME: 62500
    },


    {
      SQL_TEXT: 'SELECT value FROM v$sysstat WHERE stat_id IN (24469293, 1099569955, 2432034337, 3332107451, 3649082374, 3868577743) ORDER BY stat_id',
      LAST_ACTIVE_TIME: '2022-01-02T19:22:46.000Z',
      DISK_READS: 0,
      CPU_TIME: 15625
    },
    {
      SQL_TEXT: 'UPDATE MGMT_TARGETS SET LAST_LOAD_TIME=:B2 WHERE TARGET_GUID = :B1 AND (LAST_LOAD_TIME < :B2 OR LAST_LOAD_TIME IS NULL)',
      LAST_ACTIVE_TIME: '2022-01-02T19:24:14.000Z',
      DISK_READS: 50,
      CPU_TIME: 78125
    },
    {
      SQL_TEXT: 'BEGIN :1 := MGMT_FAILOVER.register(:2, :3, :4, :5); END;',
      LAST_ACTIVE_TIME: '2022-01-02T17:12:36.000Z',
      DISK_READS: 6,
      CPU_TIME: 15625
    },
    {
      SQL_TEXT: "SELECT TASK_LIST.TASK_ID FROM (SELECT /*+ NO_MERGE(T) ORDERED */ T.TASK_ID FROM (SELECT * FROM DBA_ADVISOR_TASKS ORDER BY TASK_ID DESC) T, DBA_ADVISOR_PARAMETERS_PROJ P1, DBA_ADVISOR_PARAMETERS  _PROJ P2 WHERE T.ADVISOR_NAME='ADDM' AND T.STATUS = 'COMPLETED' AND T.EXECUTION_START >= (SYSDATE - 1) AND T.HOW_CREATED = 'AUTO' AND T.TASK_ID = P1.TASK_ID AND P1.PARAMETER_NAME = 'INSTANCE' AND P1.PARAMETER _VALUE = SYS_CONTEXT('USERENV','INSTANCE') AND T.TASK_ID = P2.TASK_ID AND P2.PARAMETER_NAME = 'DB_ID' AND P2.PARAMETER_VALUE = TO_CHAR(:B1 ) ORDER BY T.TASK_ID DESC) TASK_LIST WHERE ROWNUM = 1",
      LAST_ACTIVE_TIME: '2022-01-02T19:23:36.000Z',
      DISK_READS: 2,
      CPU_TIME: 15625
    },
    {
      SQL_TEXT: "/* OracleOEM */  SELECT 'RECOVERY AREA' recovery_area,        CASE WHEN space_limit > 0 AND space_limit >= space_used AND space_used >= space_reclaimable  THEN 100 * (space_limit - ( space_used - space_reclaimable))/space_limit             ELSE NULL END free_space   FROM v$recovery_file_dest  WHERE name IS NOT NULL    AND rownum = 1 ",
      LAST_ACTIVE_TIME: '2022-01-02T19:18:30.000Z',
      DISK_READS: 0,
      CPU_TIME: 15625
    },
    {
      SQL_TEXT: "select count(*) from dba_users where username ='DVSYS' and user_id = 1279990",
      LAST_ACTIVE_TIME: '2022-01-02T19:14:56.000Z',
      DISK_READS: 0,
      CPU_TIME: 15625
    }
  ];
  const creationTable = ()=>{
  function tableCreate() {
    let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  // Adding the entire table to the body tag
  document.getElementById('body').appendChild(table);
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "SQL_TEXT";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "LAST_ACTIVE_TIME";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "DISK_READS";
  let heading_4 = document.createElement('th');
  heading_4.innerHTML = "CPU_TIME";
  
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  thead.appendChild(row_1);
  
  

  
  // Creating and adding data to third row of the table
  for(i=0;i<responses.length;i++){
        let row_3 = document.createElement('tr');
  let row_3_data_1 = document.createElement('td');
  row_3_data_1.innerHTML = responses[i].SQL_TEXT;
  let row_3_data_2 = document.createElement('td');
  row_3_data_2.innerHTML = responses[i].LAST_ACTIVE_TIME;
  let row_3_data_3 = document.createElement('td');
  row_3_data_3.innerHTML = responses[i].DISK_READS;
  let row_3_data_4 = document.createElement('td');
  row_3_data_4.innerHTML = responses[i].CPU_TIME;
  

  row_3.appendChild(row_3_data_1);
  row_3.appendChild(row_3_data_2);
  row_3.appendChild(row_3_data_3);
  row_3.appendChild(row_3_data_4);
  tbody.appendChild(row_3);
 
  }
  }
  tableCreate()

}
// export de
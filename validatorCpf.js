'use strict';

function validatorCpf(strCpf) {
  let soma;
  let resto;
  soma = 0;

  if (strCpf.length > 11 || strCpf.length < 11) return false;
  debugger;
  if (strCpf == "00000000000") return false;
  debugger;
  if (typeof strCpf == "number") return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
  }

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCpf.substring(9, 10))) return false;

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11
  }

  if (resto == 10 || (resto == 11)) resto = 0;
  if (resto != parseInt(strCpf.substring(10, 11))) return false
  console.log(resto)
}


validatorCpf("61823305385");

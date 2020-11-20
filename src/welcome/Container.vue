<template>
  <div class="q-ma-md q-pa-md rounded-borders">
    <div class="q-my-md q-pa-sm">
      <el
        :value="data && data.nickname"
        valueWrapClass="text-orange text-h5"
        prefix="Добро пожаловать, "
        prefixClass="q-mr-sm text-h5"
      />
    </div>
    <div class="q-my-md q-pa-sm">
      <el
        :value="data && data.currentPackage"
        valueWrapClass="text-orange text-h5"
        prefix="Текущий пакет"
        prefixClass="q-mr-sm text-h5"
      />
    </div>
    <!-- 
    <div class="q-my-md q-pa-sm">
      <span class="q-mr-sm"
        >@(Турниров) <span class="text-warning">15</span></span
      >
      <span class="q-mr-sm"
        >@(Базовая загрузка) <span class="text-warning">16</span></span
      >
      <span class="q-mr-sm"
        >@(Скрилл статус) <span class="text-warning">17</span></span
      >
      <span class="q-mr-sm"
        >@(Бекинг) <span class="text-warning">18</span></span
      >
    </div> -->

    <div class="row q-pa-md q-my-md badge">
      <q-card class="col-12 col-sm-4 no-box-shadow">
        <el
          :value="data && data.abi"
          valueEl="div"
          valueWrapClass="q-ma-md text-h5 text-orange"
          postfix="АБИ"
          postfixEl="div"
          postfixClass="text-uppercase q-ma-md"
          postfix2="??????????"
          postfixEl2="div"
          postfixClass2="q-ma-md"
        />
      </q-card>
      <q-card class="col-12 col-sm-4 no-box-shadow">
        <el
          :value="data && data.profit"
          valueEl="div"
          valueWrapClass="q-ma-md text-h5 text-orange"
          postfix="Профит"
          postfixEl="div"
          postfixClass="text-uppercase q-ma-md"
          postfix2="Ваш доход при текущем расчете"
          postfixEl2="div"
          postfixClass2="q-ma-md"
        />
      </q-card>
      <q-card class="col-12 col-sm-4 no-box-shadow no-border">
        <el
          :value="data && data.tournaments"
          valueEl="div"
          valueWrapClass="q-ma-md text-h5 text-orange"
          postfix="Турниров"
          postfixEl="div"
          postfixClass="text-uppercase q-ma-md"
          postfix2="Количество сыгранных турниров"
          postfixEl2="div"
          postfixClass2="q-ma-md"
        />
      </q-card>
    </div>

    <div class="row q-my-md">
      <q-btn class="q-ma-sm bg-orange">
        <el :value="(data && data.transactionBtnText) || 'Создать перевод'" />
      </q-btn>
      <el
        :value="data && data.transactionBtnHint"
        :hidden="true"
        wrapClass="q-my-sm q-pa-sm transactionHint"
      />
    </div>

    <div class="row q-my-md">
      <el
        :value="data && data.range"
        valueWrapClass="q-mr-sm text-orange"
        prefix="Твои достижения за"
        prefixClass="q-mr-sm"
        postfix="дней"
      />
    </div>

    <div class="row q-my-md">
      <div class="col-12 col-10-sm">
        <div class="row q-pa-md round-tiny-border">
          <el
            wrapClass="q-mr-md"
            :value="data && data.winRate"
            valueWrapClass="q-mr-sm text-orange"
            postfix="EV-винрейт"
          />
          <el
            wrapClass="q-mr-md"
            :value="data && data.abi"
            valueWrapClass="q-mr-sm text-orange"
            postfix="Аби"
          />
          <el
            wrapClass="q-mr-md"
            :value="data && data.tournaments"
            valueWrapClass="q-mr-sm text-orange"
            postfix="турниров"
          />
          <el
            wrapClass="q-mr-md"
            :value="data && data.afc"
            valueWrapClass="q-mr-sm text-orange"
            postfix="АФС"
          />
          <el
            wrapClass="q-mr-md"
            :value="data && data.topScore"
            valueWrapClass="q-mr-sm text-orange"
            postfix="Лучший
            результат"
          />
        </div>
      </div>
    </div>

    <div class="row q-my-md">
      <el
        wrapClass="q-pa-sm"
        :value="data && data.profit"
        valueWrapClass="q-mr-sm text-orange"
        prefixEl="span"
        prefix="Профит • "
        prefixClass="q-mr-sm text-uppercase"
      />
    </div>
  </div>
</template>

<script>
import El from "../components/Element";
export default {
  name: "Container",
  components: { el: El },
  props: {
    data: {
      type: undefined,
    },
  },
};
</script>

<style>
.row .q-card {
  border-radius: 0;
  border-right: 1.8px solid orange;
}
.badge {
  border: 3px solid orange;
  border-radius: 12px;
}
.transactionHint {
  max-width: 400px;
}
@media screen and (max-width: 600px) {
  .row .q-card {
    border-radius: 0;
    border-right: 0px solid orange;
    border-bottom: 1.8px solid orange;
  }
}
.dayCount {
  margin-top: -40px;
}
.round-tiny-border {
  border: 1px solid orange;
  border-radius: 12px;
}
</style>
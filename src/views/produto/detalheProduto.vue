<script setup>
import SliderVue from '@/components/widgets/slider/SliderComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Vitrine from '@/components/widgets/slider/Vitrine.vue'
import apiService from '@/js/fetchData.js'
import sliderImage from '@/components/widgets/slider/sliderImage.vue'
import loaderVue from '@/components/widgets/loader/loader.vue'
</script>

<template>
    <loaderVue :isLoaderActive="loaderActive" />
    <section class="detalhe-produto container-div">
        <div class="container-produto">
            <sliderImage :slidesPerView="'auto'" class="slider-produto">
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="image-produto" :src="product.image" alt="" srcset="" />
                </swiper-slide>
            </sliderImage>
            <div>
                <h1>{{ product.titulo }}</h1>
                <span class="produto-descricao">
                    <p>{{ descricao.curta }}</p>
                    <a href="#descricao" class="ancora-dropdown">Ler mais</a>
                </span>
            </div>
        </div>
        <div class="teste">
            <span class="produto-preco">R${{ product.price }}</span>
            <div>
                <span>Quantidade:</span>
                <div class="container-amount">
                    <button class="amount-button" @click="decrementAmount">-</button>
                    <input type="tel" :value="amount"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
                    <button class="amount-button" @click="amount++">+</button>
                </div>
            </div>
            <button class="product-add-cart">Adicionar ao carrinho</button>
        </div>
    </section>

    <section id="descricao" class="container-div">
        <h3>Saiba de tudo sobre esse produto</h3>
        <p>{{ descricao.longa }}</p>
    </section>

    <Vitrine :produtosCard="produtos" :fetchProductDetails="fetchProductDetails" :titulo="`Você também pode gostar`" />
</template>

<script>
export default {
    data() {
        return {
            product: [],
            produtos: [],
            descricao: {},
            loaderActive: true,
            amount: 1
        }
    },
    methods: {
        async fetchProductDetails() {
            try {
                const req = await fetch(`http://localhost:3000/produtos/${this.$route.params.id}`)
                const data = await req.json()
                this.product = data
                this.descricao = data.descricoes

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                this.loaderActive = false;
            } catch (error) {
                console.error('Não foi possível buscar os dados', error)
                throw error
            }
        },
        async fetchData() {
            try {
                const vitrines = await apiService.getDadosOfVitrines()
                this.vitrine_home01 = vitrines.vitrine_home01
                this.produtos = vitrines.vitrine_home01.produtos
            } catch (error) {
                console.error('Não foi possivel buscar os dados pedidos', error)
            }
        },
        decrementAmount() {
            if (this.amount >= 2) {
                this.amount--
            }
        }
    },
    watch: {
        '$route.params.id': {
            emit: true,
            handler(produtoEscolhido) {
                this.fetchProductDetails();
            }
        }
    },
    mounted() {
        this.fetchProductDetails()
        this.fetchData()
    }
}
</script>

<style scoped>
.detalhe-produto {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 16px;
    margin: 0 auto;
}

.image-produto {
    min-width: 370px;
    max-width: 370px;
    height: 370px;
    object-fit: cover;
    object-position: top;
}

.produto-descricao {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    gap: 10px;
    height: 100%;
}

.produto-descricao p {
    height: 160px;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
}

.ancora-dropdown {
    padding: 0;
    text-decoration: underline;
    font-weight: bold;
    color: var(--background-wine);
}

div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.slider-produto {
    min-width: 370px;
    max-width: 370px;
}

.container-produto {
    flex-direction: row;
    gap: 10px;
    padding: 16px;
}

.teste {
    max-width: 422px;
    width: 100%;
    padding: 16px;
    display: flex;
    margin: 0 auto;
    ;
}

.produto-preco {
    font-weight: bold;
    font-size: 24px;
}

h1 {
    font-size: 20px;
}

.product-add-cart {
    width: 100%;
    padding: 16px;
    justify-content: center;
    background: var(--background-wine);
    color: var(--background-white);
}

.container-div {
    max-width: 1170px;
}

.amount-button {
    padding: 16px;
}

.container-amount {
    display: flex;
    width: 116px;
    flex-direction: row;
    border: 1px solid var(--background-gray-400);
}

.container-amount input {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
}

#descricao {
    margin: 40px auto;
    padding: 16px;
}

@media (max-width: 1200px) {

    .detalhe-produto,
    .container-produto {
        flex-direction: column;
        margin: 0 auto;
    }

    h1 {
        font-size: 26px;
    }

    .image-produto {
        min-width: 300px;
        max-width: 300px;
        height: 300px;
    }

    .slider-produto {
        min-width: 300px;
        max-width: 300px;
    }
}
</style>
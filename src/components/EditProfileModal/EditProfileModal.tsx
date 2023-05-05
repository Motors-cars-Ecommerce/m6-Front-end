import React, { useContext, useState } from "react"
import Modal from "react-modal"
import {
  StyledDivModal,
  DivHeaderModal,
  DivCarDetailModal,
  DivButtonModal,
} from "./styles"
import {
  InputBoxComponent,
  SelectBoxComponent,
} from "../../styles/componets/inputs/input"
import {
  AddImageButton,
  CancelButton,
  CreateAnnounceButton,
  DisableButton,
  EnableButton,
} from "../../styles/componets/buttons/buttons"
import { StyledTitle } from "../../styles/componets/typography"
import { FormComponet } from "../../styles/componets/Forms/form"
import { IoIosClose } from "react-icons/io"
import { SallerContext, icar } from "../../context/salleContext"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const customStyles = {
  content: {
    insetInlineStart: "5px",
    width: "85vw",
    insetBlockStart: "20vw",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
}

const customStylesDesktop = {
  content: {
    width: "520px",
    height: "80vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
}

const imageSchema = yup.object().shape({
  image_url: yup.string(),
})

const modelCarSchema = yup.object().shape({
  branded: yup.string(),
  model: yup.string(),
  year: yup.string(),
  fuel: yup.string(),
})

const formSchema = yup.object().shape({
  km: yup.number(),
  price: yup.number(),
  color: yup.string(),
  description: yup.string(),
  main_image: yup.string(),
  images: yup.array(imageSchema),
  model_car: modelCarSchema,
})

export const EditProfileModal = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [modalStyles, setModalStyles] = React.useState(
    window.innerWidth < 800 ? customStyles : customStylesDesktop
  )
  const {
    saller,
    createNewCar,
    carsApi,
    carModels,
    getAllCarModels,
    getCarModel,
    carModel,
    setCarModel,
  } = useContext(SallerContext)

  const [brandCar, setBrandCar] = useState("")
  const [imageInputsCount, setImageInputsCount] = useState(1)

  const handleAddImageButtonClick = () => {
    if (imageInputsCount === 6) {
      return
    }
    setImageInputsCount(imageInputsCount + 1)
  }

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(null)
    const selectedBrand = e.target.value
    setBrandCar(selectedBrand)
    getAllCarModels(selectedBrand)
  }

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(null)
    const selectModel = e.target.value
    getCarModel(selectModel, brandCar)
  }

  React.useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800 ? customStyles : customStylesDesktop
      )
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  const carOptions =
    carsApi &&
    Object.keys(carsApi).map((brand) => (
      <option key={brand} value={brand}>
        {brand}
      </option>
    ))

  const carModelOptions = carModels.map((model: any) => (
    <option key={model.name} value={model.name}>
      {model.name}
    </option>
  ))

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<icar>({
    resolver: yupResolver(formSchema),
  })

  const submit = (data: icar) => {
    const newData = {
      user: saller,
      comments: [],
      id: data.id,
      km: data.km,
      price: data.price,
      color: data.color,
      description: data.description,
      main_image: data.main_image,
      model_car: {
        branded: data.model_car.branded,
        model: data.model_car.model,
        year: data.model_car.year,
        fuel: data.model_car.fuel,
      },
      images: data.images.map((image) => ({
        image_url: image.image_url,
      })),
    }
    createNewCar(newData)
    toggleModal()
  }

  const form = document.getElementById("form_create") as HTMLFormElement

  return (
    <StyledDivModal>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <DivHeaderModal>
          <StyledTitle
            tag="h5"
            color="--grey-1"
            weight={500}
            size={16}
            height={20}
          >
            Criar anúncio
          </StyledTitle>
          <IoIosClose onClick={toggleModal} />
        </DivHeaderModal>
        <StyledTitle
          tag="span"
          color="--grey-0"
          size={14}
          height={24}
          weight={500}
        >
          Informação do veiculo
        </StyledTitle>
        <FormComponet id="form_create" onSubmit={handleSubmit(submit)}>
          <label htmlFor="branded">Marca</label>
          <SelectBoxComponent
            {...register("model_car.branded")}
            onChange={handleBrandChange}
          >
            <option value="">Selecione a Marca:</option>
            {carOptions}
          </SelectBoxComponent>
          <label htmlFor="model">Modelo</label>
          <SelectBoxComponent
            placeholder="Mercedes Benz"
            {...register("model_car.model")}
            onChange={handleModelChange}
          >
            <option value="">Selecione o modelo:</option>
            {carModelOptions}
          </SelectBoxComponent>
          <DivCarDetailModal>
            <div>
              <label htmlFor="">Ano</label>
              <InputBoxComponent
                type="text"
                placeholder="2018"
                defaultValue={carModel ? carModel?.year : ""}
                readOnly
                {...register("model_car.year")}
              />
            </div>
            <div>
              <label htmlFor="fuel">Combustivel</label>
              <SelectBoxComponent {...register("model_car.fuel")}>
                <option value="Gasolina">Gasolina</option>
                <option value="Etanol">Etanol</option>
                <option value="Flex">Flex</option>
              </SelectBoxComponent>
            </div>
            <div>
              <label htmlFor="km">Quilometragem</label>
              <InputBoxComponent
                type="text"
                placeholder="30.000"
                {...register("km")}
              />
            </div>
            <div>
              <label htmlFor="color">Cor</label>
              <InputBoxComponent
                type="text"
                placeholder="Branco"
                {...register("color")}
              />
            </div>
            <div>
              <label htmlFor="">Preço tabela FIPE</label>
              <InputBoxComponent
                type="text"
                placeholder="R$ 48.000,00"
                value={carModel ? `R$ ${carModel?.value},00` : ""}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <InputBoxComponent
                type="text"
                placeholder="R$ 50.000,00"
                {...register("price")}
              />
            </div>
          </DivCarDetailModal>
          <label htmlFor="description">Descrição</label>
          <InputBoxComponent
            type="text"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            {...register("description")}
          />
          <label htmlFor="main_image">Imagem da Capa</label>
          <InputBoxComponent
            type="text"
            placeholder="https://image.com"
            {...register("main_image")}
          />
          {Array.from({ length: imageInputsCount }, (_, index) => (
            <>
              <label htmlFor="image_url">{index + 1}ª Imagem da Galeria</label>
              <InputBoxComponent
                key={index}
                type="text"
                {...register("")}
              />
            </>
          ))}
          {errors?.images && <span>{errors.images.message}</span>}
          <AddImageButton type="button" onClick={handleAddImageButtonClick}>
            Adicionar campo para imagem da galeria
          </AddImageButton>
          <DivButtonModal>
            <CancelButton onClick={() => toggleModal()}> Cancelar</CancelButton>
            {form?.checkValidity() ? (
              <EnableButton type="submit">Criar Anuncio</EnableButton>
            ) : (
              <DisableButton type="submit">Criar Anuncio</DisableButton>
            )}
          </DivButtonModal>
        </FormComponet>
      </Modal>
    </StyledDivModal>
  )
}
